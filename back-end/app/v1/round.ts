import { Request, Response } from 'express';
import crypto from 'crypto';
import { insertPlayer, Player } from '../logic/player';
import { insertRound } from '../logic/round';

// Receives a list of players, chooses one to be the tea maker
export const pickTeaMaker = async (req: Request, res: Response) => {
    const { players } = req.body;
    if (!players || players.length < 1) {
        return res.status(400).json([
          'invalid request'
        ]);
    }
console.log({players});
    // each participant needs to be registered in our db
    const registered: Array<Player> = [];
    for (const p of players) {
        if (p.id) {
            registered.push(p);
            continue;
        }
        const player = await insertPlayer(p);
        if (!player)
            continue;
        registered.push(player);
        console.log({player});
    }
console.log({registered});
    // pick randomly a "winner"
    const random = crypto.randomInt(registered.length);
    console.log({random});
    const winner = registered[random];
    // store the round details & the round participants
    await insertRound(winner, registered);
    return res.status(200).json(winner);
}
