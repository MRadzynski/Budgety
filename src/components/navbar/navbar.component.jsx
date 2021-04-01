import React, { useState } from 'react';

import Hamburger from '../hamburger/hamburger.component';
import Menu from '../menu/menu.component';

import { NavbarContainer } from './navbar.styles';

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
