import React from 'react';
import { HamburgerContainer } from './Hamburger.styles';
import { useLocation } from 'react-router';

interface HamburgerProps {
  open: boolean;
  toggleOpen?: () => void;
}

const Hamburger = ({ open, toggleOpen }: HamburgerProps) => {
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
