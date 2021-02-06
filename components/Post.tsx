import styled from 'styled-components';

const StyledPost = styled.div`
  border-radius: 100px;
  padding: 1rem;
  padding-left: 2rem;
  background: #91f7a6;
`;

export const Post = ({ post }) => {
  return (
    <StyledPost>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </StyledPost>
  );
};
