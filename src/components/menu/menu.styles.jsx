import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MenuContainer = styled.nav`
  height: 100vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(240, 240, 240, 0.95);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-40vw)')};
  transition: all 0.3s linear;
  position: absolute;
  z-index: 9;

  @media screen and (min-width: 64rem) {
    width: 25vw;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
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
  font-weight: bold;
`;
