import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuContainerProps {
  open: boolean;
}

interface MenuOverlayProps {
  open: boolean;
}

export const MenuContainer = styled.nav<MenuContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: calc(var(--vh, 1vh) * 100);
  position: absolute;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100vw)')};
  transition: all 0.4s linear;
  width: 100vw;
  z-index: 9;
`;

export const MenuItem = styled.li`
  font-size: 2.5rem;
  text-align: center;
  width: 100%;

  &:nth-child(2) {
    word-spacing: 250rem;
  }

  &:last-child {
    bottom: 5%;
    cursor: pointer;
    padding: 1.5rem 0;
    position: absolute;
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
  color: var(--black-shade);
  display: inline-block;
  height: 100%;
  padding: 1.5rem 0;
  text-decoration: none;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

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

export const MenuList = styled.ul`
  align-items: center;
  background-color: rgba(240, 240, 240, 0.95);
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
  color: var(--black-shade);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 4rem;
  height: 100%;
  justify-content: center;
  list-style: none;
  padding-bottom: 3rem;
  position: relative;
  width: 40vw;
  z-index: 2;

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
    gap: 1rem;
    padding-bottom: 7rem;
    width: 30vw;
  }

  @media ${breakpoints.laptop} {
    gap: 1.5rem;
  }

  @media ${breakpoints.lLaptop} {
    gap: 1rem;
    width: 25vw;
  }

  @media ${breakpoints.desktopFHD} {
    gap: 2rem;
    width: 20vw;
  }

  @media ${breakpoints.desktopUltrawide} {
    gap: 3rem;
    width: 15vw;
  }
`;

export const MenuOverlay = styled.div<MenuOverlayProps>`
  background-color: transparent;
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  right: 0;
  width: 60vw;
  z-index: 1;

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
