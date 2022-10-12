import breakpoints from '../../styles/breakpoints.json';
import styled, { keyframes } from 'styled-components';

interface CustomPopupContainerProps {
  open: boolean;
}

const slide = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const CustomPopupContainer = styled.div<CustomPopupContainerProps>`
  align-items: center;
  animation: ${slide} 0.2s ease-in;
  background-color: var(--white-shade);
  border-radius: 15px;
  bottom: 50%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--black-shade);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  padding: 3rem 4rem;
  position: absolute;
  width: 80%;

  @media ${breakpoints.tablet} {
    height: 15%;
    width: 60%;
  }

  @media ${breakpoints.xsLaptop} {
    height: 15%;
    width: 50%;
  }

  @media ${breakpoints.laptop} {
    height: 20%;
    width: 45%;
  }

  @media ${breakpoints.desktopFHD} {
    width: 40%;
  }

  @media ${breakpoints.desktopUltrawide} {
    border-radius: 25px;
    width: 35%;
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
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  left: 1rem;
  position: absolute;
  top: 0.5rem;

  @media ${breakpoints.xsPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
    top: 0;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
    top: 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
    top: 0;
  }

  @media ${breakpoints.laptop} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 4.4rem;
    left: 1.5rem;
    top: 0.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 4.6rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;
    left: 2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
    left: 4rem;
    top: 1.5rem;
  }
`;
