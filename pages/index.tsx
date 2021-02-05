import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Post } from "../utils/intefaces";
import { wrapper } from "./_app";

type Props = {
  posts: Post[]
}



function Home() {
  const posts = useSelector(state => state.posts.posts)
  
  return (
    <ul>
      { posts && posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// export async function getServerSideProps(context: GetServerSideProps) {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts)
//   dispatch(fetchPosts())
//   return {
//       props: {
//           posts: posts
//       }
//   }
// }

export const getServerSideProps = wrapper.getServerSideProps(
  async ({store}) => {
    await store.dispatch(fetchPosts())
  }
)

export default Home;