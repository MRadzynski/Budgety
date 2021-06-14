import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  outline: 0;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
  font-size: 2rem;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: var(--white-shade);
  }

  @media (max-width: 20rem) {
    width: 19rem;
    height: 4rem;
    font-size: 1.8rem;
  }

  @media (min-width: 48rem) {
    width: 30rem;
    height: 6rem;
    font-size: 2.8rem;
    border-radius: 35px;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    width: 35rem;
    height: 7rem;
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 35rem;
    height: 6rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    width: 30rem;
    height: 5.5rem;
  }

  @media (min-width: 120rem) {
    width: 35rem;
    height: 6.5rem;
    font-size: 3.4rem;
  }

  @media (min-width: 160rem) {
    height: 6rem;
    font-size: 3.2rem;
  }

  @media (min-width: 240rem) {
    width: 60rem;
    height: 10rem;
    border-radius: 100px;
    font-size: 5rem;
  }
`;
