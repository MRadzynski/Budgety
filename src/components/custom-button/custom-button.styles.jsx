import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const CustomButtonContainer = styled.button`
  width: 20rem;
  height: 5rem;
  position: relative;
  border: 0;
  border-radius: 25px;
  outline: 0;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-size: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: var(--white-shade);
  }

  @media ${breakpoints.xsPhone} {
    width: 19rem;
    height: 4rem;
    font-size: 1.8rem;
  }

  @media ${breakpoints.tablet} {
    width: 30rem;
    height: 6rem;
    font-size: 2.8rem;
    border-radius: 35px;
  }

  @media ${breakpoints.lTabletPortrait} {
    width: 35rem;
    height: 7rem;
    font-size: 3.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 30rem;
    height: 6rem;
  }

  @media ${breakpoints.desktopFHD} {
    width: 35rem;
    height: 6.5rem;
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    height: 6rem;
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktop2K} {
    height: 9rem;
    width: 40rem;
    border-radius: 50px;
    font-size: 4rem;
  }

  @media ${breakpoints.desktop4K} {
    width: 60rem;
    height: 10rem;
    border-radius: 100px;
    font-size: 5rem;
  }
`;
