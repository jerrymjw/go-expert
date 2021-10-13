/**
 * Thinking in React
 * 1. 将设计稿划分组建层级
 *  - Button { children, variant }
 *  透明 SOLID OpenClose? SingleResponsibly
 *  - Header
 *    - Logo
 *    - Navigation
 *    - Authentication
 *      - LogIn
 *      - SignUp
 * 2. 静态版本
 *   */
  
import React from 'react';
import styled from 'styled-components';
import Authentication from './Authentication';
import Logo from './Logo';
import Navigation from './Navigation';

// 在x轴左中右 -> 布局 -> flex -> container

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 80px;
  box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.15);
`;

const Header = () => (
  <Container>
    <Logo />
    <Navigation />
    <Authentication />
  </Container>
);

export default Header;
