import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

const handleRes = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') { 
      try {
        const axiosRes: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = axiosRes.data;
        res.status(200).json(posts.slice(0, 10));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // El error es de Axios
          console.error(error.response?.status, error.message);
          res.status(error.response?.status || 400).send(error.message);
        } else {
            // Otro tipo de error
            console.error('Api error:', error);
            res.status(400).send('Api error');
        }
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
};

export default handleRes;
