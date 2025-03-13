import express from "express";
import http from "http";
import cors from 'cors';
import { fetchUserPlayers, loginAsUser, storeUserPlayers } from "./v1/user";
import { pickTeaMaker } from "./v1/round";
import { fetchTopParticipants, fetchWinnerRank } from "./v1/summary";
import verify from './utils/jwt';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, _, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token) {
        const decodedToken =  verify(token);
        req.body.authUserId = decodedToken.sub;
    }
    next();
});

const router = express.Router();

router.post('/pick-tea-maker', pickTeaMaker);
router.get('/fetch-winner-rank', fetchWinnerRank);
router.get('/fetch-top-participants', fetchTopParticipants);
router.post('/pretend-login', loginAsUser);
router.post('/store-user-players', storeUserPlayers);
router.get('/fetch-user-players', fetchUserPlayers);

app.use('/v1/', router);

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 4000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
