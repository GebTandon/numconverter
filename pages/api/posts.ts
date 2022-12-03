// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//https://blog.kieranroberts.dev/getting-started-with-nextjs-api-routes
//https://nextjs.org/docs/api-routes/response-helpers 

import type { NextApiRequest, NextApiResponse } from 'next'
import type {Posts,Post} from '../../types/posts';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Posts>
) {

  console.log(req.body); // NULL
  console.log(req.query) // {} in our example

  console.log(req.method); // GET
  console.log(req.headers.host); // localhost:3000
  console.log(req.url); // /api/posts

  res.status(200).json([{title:'Title1'},{title:'Title2'},{title:'Title3'},{title:'Title4'}]);
}
