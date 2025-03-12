import express from "express";
import http from "http";
import cors from 'cors';
import { fetchUser } from "./v1/user";
import { pickTeaMaker } from "./v1/round";
import { fetchTopParticipants, fetchWinnerRank } from "./v1/summary";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const router = express.Router();

router.get('/fetch-user', fetchUser);
router.post('/pick-tea-maker', pickTeaMaker);
router.get('/fetch-winner-rank', fetchWinnerRank);
router.get('/fetch-top-participants', fetchTopParticipants);

app.use('/v1/', router);

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 4000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
