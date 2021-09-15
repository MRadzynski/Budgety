import styled from 'styled-components';

export const ExchangeContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 6rem 2rem;

  @media (min-width: 20rem) {
    gap: 2rem;
    padding: 3rem 2rem;
  }

  @media (min-width: 22.5rem) {
    gap: 2.5rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    gap: 3.5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape){
    padding: 3rem 2rem;
  }
`;

export const ExchangeTitle = styled.h1`
  color: var(--white-shade);
  font-size: 3rem;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    font-size: 3.2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 25rem) {
    font-size: 4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 6rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    margin-top: 5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 6rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
    margin-top: 2rem;
    font-size: 6.2rem;
  }

  @media (min-width: 120rem) {
    font-size: 7rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    margin-top: 2rem;
    font-size: 9rem;
  }

  @media (min-width: 240rem) {
    margin-top: 8rem;
    font-size: 14rem;
  }
`;

export const ExchangeSubTitle = styled.h2`
  width: 90%;
  color: var(--white-shade);
  font-size: 1.8rem;
  font-weight: normal;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    font-size: 1.6rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 120rem) {
    font-size: 3.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5rem;
  }

  @media (min-width: 240rem) {
    font-size: 7rem;
  }
`;

export const ExchangeButtonsContainer = styled.div`
  display:flex;
  gap: 2rem;

  @media (min-width: 48rem) {
    gap: 8rem;
  }

  @media (min-width: 160rem) {
    gap: 10rem;
  }
`;

export const ExchangeButton = styled.button`
  width: 13rem;
  padding: 1rem 1.5rem;
  border: 2px solid var(--secondary-color);
  border-radius: 15px;
  background-color: var(--white-shade);
  color: var(--black-shade);
  font-size: 1.5rem;
  box-shadow: 0 6px 6px rgba(0,0,0,0.25);
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray)
  }

  @media (min-width: 20rem) {
    width: 10rem;
    padding: 1rem 1rem;
    font-size: 1.1rem;
  }

  @media (min-width: 22.5rem) {
    width: 11rem;
    padding: 1rem 1rem;
    font-size: 1.3rem;
  }

  @media (min-width: 25rem) {
    width: 13rem;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 48rem) and (orientation: portrait){
    width: 20rem;
    padding: 1.5rem 2rem;
    font-size: 2rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    width: 25rem;
    margin-top: 4rem;
    padding: 1.5rem 2rem;
    font-size: 2.8rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 20rem;
    font-size: 2rem;
    border-radius: 20px;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    width: 25rem;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    font-size: 2.8rem;
  }

  @media (min-width: 120rem) {
    border-radius: 25px;
  }

  @media (min-width: 160rem) {
    width: 30rem;
    margin-top: 2.5rem;
    border-radius: 30px;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    margin-top: 6rem;
    padding: 2.5rem 2rem;
  }

  @media (min-width: 240rem) {
    width: 45rem;
    margin-top: 10rem;
    padding: 4rem 3rem;
    border-radius: 50px;
    font-size: 5rem;
  }
`;