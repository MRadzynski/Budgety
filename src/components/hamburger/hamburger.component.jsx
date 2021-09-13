import React from 'react';
import { useLocation } from 'react-router';

import { HamburgerContainer } from './hamburger.styles';

const Hamburger = ({ open, setOpen }) => {
  const pathname = useLocation().pathname.slice(1);

  return (
    <HamburgerContainer open={open} onClick={() => setOpen(!open)} location={pathname}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  )
};

export default Hamburger;
