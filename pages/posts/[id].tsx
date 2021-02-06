import axios from 'axios';
import { wrapper } from '../_app';
import { MainLayout } from '../../components/MainLayout';
import { Post } from '../../components/Post';
import { List } from '../../components/List';
import { Li } from '../../components/Li';
import { Comment } from '../../utils/intefaces';

const PostPage = ({ post }) => {
  return (
    <MainLayout title={post.title}>
      <Post post={post} />
      <List>
        {post.comments?.map((comment: Comment) => (
          <Li key={comment.id}>{comment.body}</Li>
        ))}
      </List>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, query }) => {
    const post = await axios.get(
      `https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`
    );
    return {
      props: {
        post: post.data,
      },
    };
  }
);

export default PostPage;
