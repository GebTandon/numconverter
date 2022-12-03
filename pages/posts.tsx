// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
import type { NextApiRequest, NextApiResponse } from 'next';

import * as React from 'react';
import type {Posts, Post} from '../types/posts';
interface PostObj { posts: Posts };

export default function Posts({ posts }:PostObj) {
    return (
      <ul>
        {posts.map((post:Post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    )
  }
  // This function gets called at build time
export async function getStaticProps() {
  
  const postsResponse = await fetch(process.env.BASE_URL + '/api/posts');
  const postsData = await postsResponse.json();

  return {
    props: {
      posts: postsData
    }
  }
  }