import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ExpensesIncomeDetailsContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 60);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: -40%;
  padding: 0 0 2rem 0;
  border-radius: 50px 50px 0px 0px;
  background-color: var(--white-shade);
  z-index: 2;

  button {
    position: absolute;
    bottom: 2.5%;
    margin: auto;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 80%;
    height: calc(var(--vh, 1vh) * 55);
    bottom: -45%;
    margin: 0 auto;
  }

  @media (min-width: 80rem) {
    button {
      bottom: 3.5%;
    }
  }

  @media (min-width: 90rem) {
    width: 70%;

    button {
      bottom: 5%;
    }
  }

  @media (min-width: 120rem) {
    width: 65%;

    button {
      bottom: 2%;
    }
  }

  @media (min-width: 160rem) {
    width: 50%;

    button {
      bottom: 2.5%;
    }
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    button {
      bottom: 1.5%;
    }
  }

  @media (min-width: 240rem) {
    height: calc(var(--vh, 1vh) * 50);
    bottom: -50%;
  }
`;

export const OverlapsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Overlap = styled(Link)`
  width: 30%;
  margin-top: 5px;
  padding-top: 3px;
  border-top: ${({ active }) =>
    active ? '0.25rem solid var(--primary-color)' : '0'};
  color: ${({ active }) =>
    active ? 'var(--primary-color)' : 'var(--black-shade)'};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 20rem) {
    font-size: 2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 48rem) {
    border-top: ${({ active }) =>
      active ? '0.3rem solid var(--primary-color)' : '0'};
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.4rem;
  }

  @media (min-width: 90rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 120rem) {
    border-top: ${({ active }) =>
      active ? '0.4rem solid var(--primary-color)' : '0'};
    font-size: 4.2rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    border-top: ${({ active }) =>
      active ? '0.5rem solid var(--primary-color)' : '0'};
    font-size: 4.8rem;
  }

  @media (min-width: 240rem) {
    border-top: ${({ active }) =>
      active ? '0.7rem solid var(--primary-color)' : '0'};
    font-size: 7rem;
  }
`;
