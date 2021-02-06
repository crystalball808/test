import styled from 'styled-components';

const StyledButton = styled.button`
  background: black;
  color: #b9f2b4;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100px;
  cursor: pointer;
  width: 25rem;
  height: 3rem;
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
