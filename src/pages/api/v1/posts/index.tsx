import { data } from '../../../../../data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handlePosts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      res.status(200).json(data);
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
};
