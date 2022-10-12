import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

interface CustomButtonContainerProps {
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

export const CustomButtonContainer = styled.button<CustomButtonContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  font-size: 2rem;
  height: 5rem;
  outline: 0;
  position: relative;
  width: 20rem;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: var(--white-shade);
  }

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
    height: 3.5rem;
    width: 16rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
    height: 4rem;
    width: 19rem;
  }

  @media ${breakpoints.tablet} {
    border-radius: 35px;
    font-size: 2.8rem;
    height: 6rem;
    width: 30rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.2rem;
    height: 7rem;
    width: 35rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.4rem;
    height: 5rem;
    width: 27rem;
  }

  @media ${breakpoints.laptop} {
    height: 5.5rem;
    width: 30rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3rem;
    height: 6rem;
    width: 35rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktop2K} {
    border-radius: 50px;
    font-size: 4rem;
    height: 9rem;
    width: 40rem;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 100px;
    font-size: 5rem;
    height: 10rem;
    width: 60rem;
  }
`;
