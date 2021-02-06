import styled from 'styled-components';

const StyledA = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
  cursor: pointer;
  font-size: ${(props) => props.size};
`;

export const A = (props) => {
  return <StyledA {...props} />;
};
