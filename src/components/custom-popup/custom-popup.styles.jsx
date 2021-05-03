import styled from 'styled-components';

export const CustomPopupContainer = styled.div`
  width: 80%;
  background-color: var(--white-shade);
  color: var(--black-shade);
  padding: 3rem 4rem;
  position: absolute;
  bottom: 50%;
  display: ${({ open }) => (open ? 'block' : 'none')};
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CustomPopupText = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const ExitPopup = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  left: 1rem;
  top: 0.5rem;
  cursor: pointer;
`;
