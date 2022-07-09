import { breakpoints } from '../../styles/breakpoints';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const OverlayContainer = styled.div`
  align-items: center;
  animation: ${slide} 0.2s ease-in;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: ${({ overlayRadius }) =>
    overlayRadius ? '50px 50px 0px 0px' : '0'};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  @media ${breakpoints.fold} {
    border-radius: ${({ overlayRadius }) =>
      overlayRadius ? '30px 30px 0px 0px' : '0'};
  }

  @media ${breakpoints.xsLaptop} {
    border-radius: ${({ overlayRadius }) =>
      overlayRadius ? '50px 50px 0px 0px' : '0'};
  }
`;
