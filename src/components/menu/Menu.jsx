import React from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import {
  MenuContainer,
  MenuList,
  MenuItem,
  MenuLink,
  MenuOverlay
} from './Menu.styles';

const Menu = ({ open, setOpen }) => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();

    return history.push('/signin');
  };

  return (
    <MenuContainer open={open}>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/expenses">Expenses Income</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/exchange">Exchange</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/history">History</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/settings">Settings</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </MenuList>
      <MenuOverlay open={open} onClick={() => setOpen(!open)} />
    </MenuContainer>
  );
};

export default Menu;
