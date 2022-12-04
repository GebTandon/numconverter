/// call this API with http://localhost:3000/api/posts

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//https://blog.kieranroberts.dev/getting-started-with-nextjs-api-routes
//https://nextjs.org/docs/api-routes/response-helpers 
//https://refine.dev/blog/next-js-with-typescript/ 
import type { NextApiRequest, NextApiResponse } from 'next'
import type {Posts,Post} from '../../../types/posts';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Posts>
) {

  console.log(req.body); // NULL
  console.log(req.query) // {} in our example

  console.log(req.method); // GET
  console.log(req.headers.host); // localhost:3000
  console.log(req.url); // /api/posts

  res.status(200).json([{id:1, title:'Title1'},{id:2, title:'Title2'},{id:3, title:'Title3'},{id:4, title:'Title4'}]);
}
