import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import { NavbarContainer } from './Navbar.styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <NavbarContainer>
      <Hamburger open={open} toggleOpen={toggleOpen} />
      <Menu open={open} toggleOpen={toggleOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
