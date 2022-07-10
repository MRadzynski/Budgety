import React, { useState } from 'react';

import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';

import { NavbarContainer } from './Navbar.styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Hamburger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
