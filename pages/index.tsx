import { useSelector } from "react-redux";
import Link from "next/link";
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
        <Link key={post.id} href={'/posts/[id]'} as={`/posts/${post.id}`} ><a>
          <li >{post.title}</li>
        </a></Link>
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