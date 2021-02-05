import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Post } from "../utils/intefaces";

type Props = {
  posts: Post[]
}



export default function Home({posts}: Props) {
  
  // useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [])
  return (
    <ul>
      {posts.map(post => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts)
  dispatch(fetchPosts())
  return {
      props: {
          posts: posts
      }
  }
}
