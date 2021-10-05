import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

const slide = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const OverlayContainer = styled.div`
  /* width: 100vw; */
  /* height: calc(var(--vh, 1vh) * 100); */
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${slide} 0.2s ease-in;
  border-radius: ${({ overlayRadius }) => overlayRadius ? '50px 50px 0px 0px' : '0'};

  @media ${breakpoints.fold} {
    border-radius: ${({ overlayRadius }) => overlayRadius ? '30px 30px 0px 0px' : '0'};
  }

  @media ${breakpoints.xsLaptop} {
    border-radius: ${({ overlayRadius }) => overlayRadius ? '50px 50px 0px 0px' : '0'};
  }
`;
