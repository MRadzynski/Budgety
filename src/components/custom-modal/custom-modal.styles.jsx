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
  padding: 0.5rem;

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 45%;
    height: ${({ large }) => (large ? '40%' : '25%')};
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    width: 40%;
  }

  @media (min-width: 120rem) {
    width: 35%;
  }

  @media (min-width: 160rem) {
    width: 30%;
  }

  @media (min-width: 240rem) {
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

  @media (min-width: 20rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 25rem) {
    left: 1.2rem;
    font-size: 2.6rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    left: 1.4rem;
    font-size: 3.4rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 4.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    left: 2rem;
    font-size: 6rem;
  }

  @media (min-width: 240rem) {
    left: 3rem;
    font-size: 9rem;
  }
`;

export const CustomModalTitle = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    font-size: 2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.6rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.4rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 4.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 4rem;
  }

  @media (min-width: 120rem) {
    font-size: 4.4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 6rem;
  }

  @media (min-width: 240rem) {
    font-size: 9rem;
  }
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

  @media (min-width: 20rem) {
    font-size: 1.6rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 25rem) {
    font-size: 2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    border-radius: 2rem;
    font-size: 4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    border-radius: 1.5rem;
    font-size: 2.6rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 3.6rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.4rem;
  }

  @media (min-width: 240rem) {
    font-size: 8rem;
  }
`;
