import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { fetchPosts } from '../redux/actions';
import { wrapper } from './_app';
import { MainLayout } from '../components/MainLayout';
import { List } from '../components/List';
import { A } from '../components/A';
import { Li } from '../components/Li';
import { PostInterface, RootState } from '../utils/intefaces';

function Home() {
  const dispatch = useDispatch();
  const posts: PostInterface[] = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <MainLayout title={'Posts'}>
      <List>
        {posts &&
          posts.map((post: PostInterface) => (
            <Link key={post.id} href={'/posts/[id]'} as={`/posts/${post.id}`}>
              <A color={'black'} size={'large'}>
                <Li key={post.id}>{post.title}</Li>
              </A>
            </Link>
          ))}
      </List>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(fetchPosts());
  }
);

export default Home;
