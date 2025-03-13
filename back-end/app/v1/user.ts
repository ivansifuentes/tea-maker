import { Request, Response } from 'express';
import { signJwt } from '../utils/jwt';
import { fetchUserPlayersRecords, insertUserPlayers } from '../logic/user';

export type User = {
    id: string;
    name: string;
    password: string;
}

// Fake login auth, returning a jwt for the given user
export const loginAsUser = async (req: Request, res: Response) => {
    const { userId, password } = req.body;
    if (!userId) {
        return res.status(400).json([
          'invalid request'
        ]);
    }

    const token = signJwt({
        role: 'User',
        sub: userId,
    });

    return res.status(200).json(token);
}

// Store list of players as the User's Players, akin to user preferences
export const storeUserPlayers = async (req: Request, res: Response) => {
    const { players, authUserId } = req.body;
    console.log({authUserId});
    if (!authUserId) {
        return res.status(401).json([
          'unauthorised request'
        ]);
    }
    console.log({players});
    if (!players) {
        return res.status(400).json([
          'invalid request'
        ]);
    }
    console.log({players});
    const result = await insertUserPlayers(authUserId, players);
    return res.status(200).json(result);
}

// Return the players linked to the given user, akin to user preferences
export const fetchUserPlayers = async (req: Request, res: Response) => {
    const { authUserId } = req.body;
    if (!authUserId) {
        return res.status(401).json([
          'unauthorised request'
        ]);
    }

    const userPlayers = await fetchUserPlayersRecords(authUserId);
    return res.status(200).json(userPlayers);
}
