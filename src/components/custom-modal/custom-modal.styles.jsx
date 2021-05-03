import styled from 'styled-components';

export const CustomModalContainer = styled.div`
  width: 70%;
  height: ${({ large }) => (large ? '35%' : '20%')};
  background-color: var(--white-shade);
  color: var(--black-shade);
  position: absolute;
  bottom: 45%;
  border-radius: 15px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;
  z-index: 3;
  padding: 0.5rem 0.5rem;
`;

export const CustomModalTitle = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const CustomModalExit = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const CustomModalButton = styled.button`
  height: ${({ large }) => (large ? '15%' : '30%')};
  width: 40%;
  background-color: var(--errorMessage);
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #fe4337;
  }
`;
