import React from 'react';

import { HamburgerContainer } from './hamburger.styles';

const Hamburger = ({ open, setOpen }) => (
  <HamburgerContainer open={open} onClick={() => setOpen(!open)}>
    <span></span>
    <span></span>
    <span></span>
  </HamburgerContainer>
);

export default Hamburger;
