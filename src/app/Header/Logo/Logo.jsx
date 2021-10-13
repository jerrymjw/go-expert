import React from 'react';
import styled from 'styled-components';
import logo from './assets/GoExpert.svg';

const Image = styled.img`
  height: 30px;
`;

const Logo = () => (
  <Image alt="Go Expert" src={logo} />
);

export default Logo;
