import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  margin: auto;
`;

export const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};
