import React from 'react';

import { MenuContainer, MenuList, MenuItem, MenuLink } from './menu.styles';

const Menu = ({ open, setOpen }) => (
  <MenuContainer open={open} setOpen={setOpen}>
    <MenuList>
      <MenuItem>
        <MenuLink to="/">Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/expenses">Expenses</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/exchange">Exchange</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/settings">Settings</MenuLink>
      </MenuItem>
    </MenuList>
  </MenuContainer>
);

export default Menu;
