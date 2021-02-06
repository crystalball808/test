import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${(props) => props.width};
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100px;
  margin: 0.1rem;
  background: white;
  padding-left: 0.3rem;
  height: 2rem;
`;

export const Input = (props) => {
  return <StyledInput {...props} />;
};
