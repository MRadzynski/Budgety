import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-around;
  left: 2rem;
  position: ${({ location }) =>
    location === 'history' ? 'absolute' : 'fixed'};
  top: 1.5rem;
  width: 3rem;
  z-index: 10;
  -webkit-tap-highlight-color: transparent;

  span {
    background-color: ${({ open }) =>
      open ? 'var(--black-shade)' : 'var(--white-shade)'};
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 0.5rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 3rem;

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
    height: 4rem;
    width: 4rem;

    span {
      height: 0.7rem;
      width: 4rem;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    left: 2.5rem;
    top: 2rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: 4rem;
    width: 4rem;

    span {
      height: 0.7rem;
      width: 4rem;
    }
  }

  @media ${breakpoints.laptop} {
    height: 5rem;
    left: 3rem;
    top: 2.5rem;
    width: 5rem;

    span {
      height: 0.8rem;
      width: 5rem;
    }
  }

  @media ${breakpoints.desktopFHD} {
    height: 6rem;
    width: 6rem;

    span {
      height: 1rem;
      width: 6rem;
    }
  }

  @media ${breakpoints.desktop2K} {
    height: 7rem;
    width: 7rem;

    span {
      height: 1.3rem;
      width: 7rem;
    }
  }

  @media ${breakpoints.desktop4K} {
    height: 12rem;
    left: 6rem;
    top: 5rem;
    width: 12rem;

    span {
      height: 2rem;
      width: 12rem;
    }
  }
`;
