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
  }

  @media (min-width: 22.5rem) {
    gap: 2.5rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    gap: 3.5rem;
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

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 6rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
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
