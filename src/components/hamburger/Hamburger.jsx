import React from 'react';
import { HamburgerContainer } from './Hamburger.styles';
import { useLocation } from 'react-router';

const Hamburger = ({ open, toggleOpen }) => {
  const { pathname } = useLocation();

  return (
    <HamburgerContainer
      location={pathname.slice(1)}
      open={open}
      onClick={toggleOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  );
};

export default Hamburger;
