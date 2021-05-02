import styled from 'styled-components';

export const OverlayContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
`;
