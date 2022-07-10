import breakpoints from '../../styles/breakpoints.json';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const CustomModalButton = styled.button`
  background-color: var(--errorMessage);
  border: 0;
  border-radius: 1rem;
  bottom: 0 !important;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font-size: 2rem;
  height: ${({ large }) => (large ? 'auto' : '30%')};
  margin: unset !important;
  padding: 0.5rem 1rem;
  position: relative !important;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 40%;
  -webkit-tap-highlight-color: transparent;

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

export const CustomModalContainer = styled.div`
  align-items: center;
  animation: ${slide} 0.3s ease-in;
  background-color: var(--white-shade);
  bottom: 35%;
  border-radius: 15px;
  color: var(--black-shade);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  height: ${({ large }) =>
    large ? 'calc(var(--vh,vh)*35)' : 'calc(var(--vh,vh)*20)'};
  justify-content: space-evenly;
  padding: 0.5rem;
  position: absolute;
  text-align: center;
  width: 70%;
  z-index: 3;

  @media ${breakpoints.xsLaptop} {
    height: ${({ large }) => (large ? '40%' : '25%')};
    width: 45%;
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
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  left: 1rem;
  position: absolute;
  top: 0.5rem;
  -webkit-tap-highlight-color: transparent;

  @media ${breakpoints.fold} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.6rem;
    left: 1.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.4rem;
    left: 1.4rem;
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
    font-size: 6rem;
    left: 2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 9rem;
    left: 3rem;
  }
`;

export const CustomModalTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
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
