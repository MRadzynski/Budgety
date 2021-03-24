import React from 'react';

import { MenuContainer } from './menu.styles';

const Menu = ({ open, setOpen }) => (
  <MenuContainer open={open} setOpen={setOpen}>
    <ul>
      <li>Home</li>
      <li>Expenses</li>
      <li>Exchange</li>
      <li>Settings</li>
    </ul>
  </MenuContainer>
);

export default Menu;
