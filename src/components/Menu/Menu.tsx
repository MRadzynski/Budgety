import {
  MenuContainer,
  MenuItem,
  MenuLink,
  MenuList,
  MenuOverlay
} from './Menu.styles';
import { signOutFromApp } from '../../firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  open: boolean;
  toggleOpen?: () => void;
}

const Menu = ({ open, toggleOpen }: MenuProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOutFromApp();

    return navigate('/signin');
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
