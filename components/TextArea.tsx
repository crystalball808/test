import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: ${(props) => props.width};
  font-family: 'Roboto', sans-serif;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100px;
  margin: 0.1rem;
  background: white;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
`;

export const TextArea = (props) => {
  return <StyledTextArea {...props} />;
};
