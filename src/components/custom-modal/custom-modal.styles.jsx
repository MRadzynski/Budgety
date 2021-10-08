import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

const slide = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const CustomModalContainer = styled.div`
  width: 70%;
  height: ${({ large }) => (large ? '35%' : '20%')};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 45%;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: var(--white-shade);
  color: var(--black-shade);
  text-align: center;
  z-index: 3;
  animation: ${slide} 0.3s ease-in;

  @media ${breakpoints.xsLaptop} {
    width: 45%;
    height: ${({ large }) => (large ? '40%' : '25%')};
  }

  @media ${breakpoints.laptop} {
    width: 40%;
  }

  @media ${breakpoints.desktopFHD} {
    width: 35%;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 30%;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 40px;
  }
`;

export const CustomModalExit = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${breakpoints.fold} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lPhone} {
    left: 1.2rem;
    font-size: 2.6rem;
  }

  @media ${breakpoints.tablet} {
    left: 1.4rem;
    font-size: 3.4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    left: 2rem;
    font-size: 6rem;
  }

  @media ${breakpoints.desktop4K} {
    left: 3rem;
    font-size: 9rem;
  }
`;

export const CustomModalTitle = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.fold} {
    font-size: 2rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.4rem;
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

  @media ${breakpoints.desktop2K} {
    font-size: 6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 9rem;
  }
`;

export const CustomModalButton = styled.button`
  width: 40%;
  height: ${({ large }) => (large ? 'auto' : '30%')};
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
  background-color: var(--errorMessage);
  font-size: 2rem;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  position: relative !important;
  bottom: 0 !important;
  margin: unset !important;

  &:hover {
    background-color: #fe4337;
  }

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    border-radius: 2rem;
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    border-radius: 1.5rem;
    font-size: 2.6rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;
