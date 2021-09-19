import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoints } from '../../styles/breakpoints';

export const MenuContainer = styled.nav`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 9;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100vw)')};
  transition: all 0.4s linear;
`;

export const MenuList = styled.ul`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
  background-color: rgba(240, 240, 240, 0.95);
  color: var(--black-shade);
  font-weight: bold;
  list-style: none;
  padding-bottom: 3rem;
  box-shadow: 0 8px 8px rgba(0,0,0,0.25);

  @media ${breakpoints.fold} {
    gap: 1.5rem;
  }

  @media ${breakpoints.xsPhone} {
    gap: 2rem;
  }

  @media ${breakpoints.sPhone} {
    gap: 3rem;
  }

  @media ${breakpoints.phone} {
    gap: 1rem;
  }

  @media ${breakpoints.lPhone} {
    gap: 2rem;
  }

  @media ${breakpoints.tablet} {
    gap: 2.5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    gap: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 30vw;
    gap: 1rem;
    padding-bottom: 7rem;
  }

  @media ${breakpoints.laptop} {
    gap: 1.5rem;
  }

  @media ${breakpoints.lLaptop} {
    width: 25vw;
    gap: 1rem;
  }

  @media ${breakpoints.desktopFHD} {
    width: 20vw;
    gap: 2rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 15vw;
    gap: 3rem;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  font-size: 2.5rem;
  text-align: center;
  
  &:nth-child(2){
    word-spacing: 250rem;
  }

  &:last-child {
    position: absolute;
    bottom: 5%;
    padding: 1.5rem 0;
    cursor: pointer;
  }

  &:hover {
    background-color: #ccc;
  }

  @media ${breakpoints.fold} {
    font-size: 2rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.phone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.4rem;
    letter-spacing: 0.3rem;

    &:last-child {
      padding: 2rem 0;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 5.2rem;

    &:last-child {
      padding: 2.5rem 0;
    }
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
    letter-spacing: 0.3rem;

    &:last-child {
      padding: 2rem 0;
    }
  }

  @media ${breakpoints.laptop} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.6rem;

    &:last-child {
      padding: 3rem 0;
    }
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;

    &:last-child {
      padding: 5rem 0;
    }
  }
`;

export const MenuLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 1.5rem 0;
  color: var(--black-shade);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;

  @media ${breakpoints.tablet} {
    padding: 2rem 0;
  }

  @media ${breakpoints.lTabletPortrait} {
    padding: 2.5rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    padding: 2rem 0;
  }

  @media ${breakpoints.desktop2K} {
    padding: 3rem 0;
  }

  @media ${breakpoints.desktop4K} {
    padding: 5rem 0;
  }
`;

export const MenuOverlay = styled.div`
  width: 60vw;
  height: calc(var(--vh, 1vh) * 100);
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  right: 0;
  z-index: 1;
  background-color: transparent;

  @media ${breakpoints.xsLaptop} {
    width: 70vw;
  }

  @media ${breakpoints.lLaptop} {
    width: 75vw;
  }

  @media ${breakpoints.desktopFHD} {
    width: 80vw;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 85vw;
  }
`;
