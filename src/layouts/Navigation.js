import React from 'react';
import styled from 'styled-components';

import Anchor from '../elements/Anchor.js';

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      <Anchor href="#hero">Home</Anchor>
      <Anchor href="#projects">Projects</Anchor>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#contact">Contact</Anchor>
    </nav>
  );
};

const StyledNavigation = styled(Navigation)``;

export default StyledNavigation;
