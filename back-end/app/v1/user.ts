import { Request, Response } from 'express';

export type User = {
    id: string;
    name: string;
    password: string;
}

// Fetch a user's details
export const fetchUser = async (req: Request, res: Response) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json([
          'invalid request'
        ]);
    }

    let user;

    return res.status(200).json(user);
}
