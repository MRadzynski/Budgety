import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

  @media (min-width: 20rem) {
    gap: 2rem;
  }

  @media (min-width: 22.5rem) {
    gap: 3rem;
  }

  @media (min-width: 23rem) {
    gap: 3.5rem;
  }

  @media (min-width: 25rem) {
    gap: 4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    gap: 5rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    gap: 8rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 30vw;
    gap: 1.5rem;
    padding-bottom: 7rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    gap: 3rem;
  }

  @media (min-width: 90rem) and (min-height: 700px) {
    width: 25vw;
  }

  @media (min-width: 90rem) and (min-height: 900px) {
    width: 25vw;
  }

  @media (min-width: 120rem) {
    width: 20vw;
  }

  @media (min-width: 160rem) {
    width: 15vw;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    gap: 6rem;
  }

  @media (min-width: 240rem) {
    gap: 10rem;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  font-size: 2.5rem;
  text-align: center;

  &:last-child {
    position: absolute;
    bottom: 5%;
    padding: 1.5rem 0;
    cursor: pointer;
  }

  &:hover {
    background-color: #ccc;
  }

  @media (min-width: 20rem) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 23rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.8rem;
    letter-spacing: 0.3rem;

    &:last-child {
      padding: 2rem 0;
    }
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 5.2rem;

    &:last-child {
      padding: 2.5rem 0;
    }
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.8rem;
    letter-spacing: 0.3rem;

    &:last-child {
      padding: 2rem 0;
    }
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 4.8rem;
  }

  @media (min-width: 90rem) and (min-height: 700px) {
    font-size: 4.2rem;
  }

  @media (min-width: 120rem) {
    font-size: 4.6rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.6rem;

    &:last-child {
      padding: 3rem 0;
    }
  }

  @media (min-width: 240rem) {
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

  @media (min-width: 48rem) and (orientation: portrait) {
    padding: 2rem 0;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    padding: 2.5rem 0;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    padding: 2rem 0;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    padding: 3rem 0;
  }

  @media (min-width: 240rem) {
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

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 70vw;
  }

  @media (min-width: 90rem) and (min-height: 700px) {
    width: 75vw;
  }

  @media (min-width: 90rem) and (min-height: 900px) {
    width: 75vw;
  }

  @media (min-width: 120rem) {
    width: 80vw;
  }

  @media (min-width: 160rem) {
    width: 85vw;
  }
`;
