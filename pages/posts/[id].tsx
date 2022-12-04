import {Post} from '../../types/posts';

// This function gets called at build time

export default function Posts({post}) {
  return (
    <div>
      Title is :{post.title}
    </div>
  );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const postsResponse = await fetch(process.env.BASE_URL + '/api/posts');
    const postsData = await postsResponse.json();
  
    // Get the paths we want to pre-render based on posts
    const paths = postsData.map((post:Post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(process.env.BASE_URL + `/api/posts/${params.id}`);
    const post = await res.json();

    // Pass post data to the page via props
    return { props: { post } }
  }