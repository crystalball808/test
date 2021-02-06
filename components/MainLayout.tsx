import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import { A } from './A';

const StyledNav = styled.nav`
  position: fixed;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledMain = styled.main`
  margin-top: 70px;
`;

export const MainLayout = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <StyledNav>
        <Link href='/'>
          <A color='#b9f2b4'>Main page</A>
        </Link>
        <Link href='/posts/new'>
          <A color='#b9f2b4'>Create New Post</A>
        </Link>
      </StyledNav>
      <StyledMain>{children}</StyledMain>
    </>
  );
};
