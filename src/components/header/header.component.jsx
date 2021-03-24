import React, { useState } from 'react';

import Hamburger from '../hamburger/hamburger.component';
import Menu from '../menu/menu.component';

import { HeaderContainer } from './header.styles';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Hamburger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </HeaderContainer>
  );
};

export default Header;
