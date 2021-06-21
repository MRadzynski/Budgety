import styled from 'styled-components';

export const CustomPopupContainer = styled.div`
  width: 80%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50%;
  padding: 3rem 4rem;
  border-radius: 15px;
  background-color: var(--white-shade);
  color: var(--black-shade);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 48rem) and (orientation: portrait) {
    width: 60%;
    height: 15%;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 50%;
    height: 15%;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    width: 45%;
    height: 20%;
  }

  @media (min-width: 120rem) {
    width: 40%;
  }

  @media (min-width: 160rem) {
    width: 35%;
    border-radius: 25px;
  }

  @media (min-width: 240rem) {
    border-radius: 40px;
  }
`;

export const CustomPopupText = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media (min-width: 20rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 4rem;
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

  @media (min-width: 160rem) {
    font-size: 4.6rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.4rem;
  }

  @media (min-width: 240rem) {
    font-size: 8rem;
  }
`;

export const ExitPopup = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 20rem) {
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    top: 0;
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    top: 0;
    font-size: 4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    top: 0;
    font-size: 3.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 4rem;
  }

  @media (min-width: 120rem) {
    top: 0.5rem;
    left: 1.5rem;
    font-size: 4.4rem;
  }

  @media (min-width: 160rem) {
    font-size: 4.6rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    left: 2rem;
    font-size: 5.4rem;
  }

  @media (min-width: 240rem) {
    top: 1.5rem;
    left: 4rem;
    font-size: 8rem;
  }
`;
