import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';
import Navigation from './Navigation';

const Header = ({ className }) => {
  return (
    <header className={[className]}>
      <div className="headerGroup">
        <a href="#hero">
          <img src={logo} alt="logo" />
        </a>
        <Navigation />
      </div>
    </header>
  );
};

const StyledHeader = styled(Header)`
  background-color: ${({ isScrolled }) =>
    isScrolled && 'rgba(16, 42, 67, 0.8)'};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .headerGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    padding: ${({ isScrolled }) => (isScrolled ? '15px 24px' : '24px')};
  }
`;

export default StyledHeader;
