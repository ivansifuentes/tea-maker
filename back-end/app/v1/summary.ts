import { Request, Response } from 'express';
import { fetchTopParticipantRecords, fetchWinnerRankRecords } from '../logic/summary';

// List of top players by number of wins (selections)
export const fetchWinnerRank = async (_: Request, res: Response) => {
    const rankList = await fetchWinnerRankRecords();
    return res.status(200).json(rankList);
}

// List of top players by number of rounds entered
export const fetchTopParticipants = async (_: Request, res: Response) => {
    const topList = await fetchTopParticipantRecords();
    return res.status(200).json(topList);
}
