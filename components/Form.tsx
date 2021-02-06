import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 100px;
  padding: 2rem;
  padding-left: 2rem;
  background: #91f7a6;
  align-items: center;
`;

export const Form = (props) => {
  return <StyledForm {...props} />;
};
