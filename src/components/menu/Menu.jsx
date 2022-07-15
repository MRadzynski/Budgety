import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import {
  MenuContainer,
  MenuItem,
  MenuLink,
  MenuList,
  MenuOverlay
} from './Menu.styles';
import { useHistory } from 'react-router-dom';

const Menu = ({ open, toggleOpen }) => {
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
      <MenuOverlay onClick={toggleOpen} open={open} />
    </MenuContainer>
  );
};

export default Menu;
