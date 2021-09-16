import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

const slide = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const CustomPopupContainer = styled.div`
  width: 80%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50%;
  padding: 3rem 4rem;
  border-radius: 15px;
  background-color: var(--white-shade);
  color: var(--black-shade);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${slide} 0.2s ease-in;

  @media ${breakpoints.tablet} {
    width: 60%;
    height: 15%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 50%;
    height: 15%;
  }

  @media ${breakpoints.laptop} {
    width: 45%;
    height: 20%;
  }

  @media ${breakpoints.desktopFHD} {
    width: 40%;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 35%;
    border-radius: 25px;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 40px;
  }
`;

export const CustomPopupText = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 4.6rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;

export const ExitPopup = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  @media ${breakpoints.xsPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    top: 0;
    font-size: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    top: 0;
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    top: 0;
    font-size: 3.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktopFHD} {
    top: 0.5rem;
    left: 1.5rem;
    font-size: 4.4rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 4.6rem;
  }

  @media ${breakpoints.desktop2K} {
    left: 2rem;
    font-size: 5.4rem;
  }

  @media ${breakpoints.desktop4K} {
    top: 1.5rem;
    left: 4rem;
    font-size: 8rem;
  }
`;
