import styled from 'styled-components';

const StyledLi = styled.li`
  display: table;
  margin: 1rem;
  border: 0.2rem solid inherit;
  border-radius: 100px;
  padding: 0.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #91f7a6;
`;

export const Li = ({ children }) => {
  return <StyledLi>{children}</StyledLi>;
};
