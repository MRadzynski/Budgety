import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const HamburgerContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  position: ${({ location }) => location === 'history' ? 'absolute' : 'fixed'};
  top: 1.5rem;
  left: 2rem;
  z-index: 10;
  cursor: pointer;

  span {
    width: 3rem;
    height: 0.5rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
    open ? 'var(--black-shade)' : 'var(--white-shade)'};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${breakpoints.tablet} {
    width: 4rem;
    height: 4rem;

    span {
      width: 4rem;
      height: 0.7rem;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    top: 2rem;
    left: 2.5rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 4rem;
    height: 4rem;

    span {
      width: 4rem;
      height: 0.7rem;
    }
  }

  @media ${breakpoints.laptop} {
    width: 5rem;
    height: 5rem;
    top: 2.5rem;
    left: 3rem;

    span {
      width: 5rem;
      height: 0.8rem;
    }
  }

  @media ${breakpoints.desktopFHD} {
    width: 6rem;
    height: 6rem;

    span {
      width: 6rem;
      height: 1rem;
    }
  }

  @media ${breakpoints.desktop2K} {
    width: 7rem;
    height: 7rem;

    span {
      width: 7rem;
      height: 1.3rem;
    }
  }

  @media ${breakpoints.desktop4K} {
    width: 12rem;
    height: 12rem;
    top: 5rem;
    left: 6rem;

    span {
      width: 12rem;
      height: 2rem;
    }
  }
`;
