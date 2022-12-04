/// call this API with http://localhost:3000/api/posts/post?id=121

import { NextApiRequest, NextApiResponse } from 'next'
import type {Posts,Post} from '../../../types/posts';

// import { setCookie } from '../../utils/cookies'
// const handler = (req: NextApiRequest, res: NextApiResponse) => {
//   // Calling our pure function using the `res` object, it will add the `set-cookie` header
//   // Add the `set-cookie` header on the main domain and expire after 30 days
//   setCookie(res, 'Next.js', 'api-middleware!', { path: '/', maxAge: 2592000 })
//   // Return the `set-cookie` header so we can display it in the browser and show that it works!
//   res.end(res.getHeader('Set-Cookie'))
// }

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '500kb', // request limit
      },
      externalResolver: true, //allows external resolver ?? e.g. express or connect
      responseLimit: false,   //else 4mb
  },
  }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post>
  ) {
    const {
        query,
        method,
        body
      } = req;
      console.log(`query:${query}`);
    res.status(200).json({id:parseInt(query.id.toString()), title:`Title-${query.id}`}); 
  }
  