import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MenuContainer = styled.nav`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100vw)')};
  transition: all 0.4s linear;
  position: absolute;
  z-index: 9;

  @media screen and (min-width: 64rem) {
    width: 25vw;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  width: 40vw;
  height: 100%;
  background-color: rgba(240, 240, 240, 0.95);
  color: var(--black-shade);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
`;

export const MenuItem = styled.li`
  font-size: 2.5rem;
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: var(--black-shade);
  -webkit-tap-highlight-color: transparent;
`;

export const MenuOverlay = styled.div`
  height: 100vh;
  width: 60vw;
  background-color: transparent;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  right: 1px;
`;
