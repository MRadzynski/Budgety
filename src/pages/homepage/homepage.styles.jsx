import styled from 'styled-components';

export const HomePageContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  padding: 6rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 20rem) {
    gap: 1.5rem;
  }

  @media (min-width: 22.5rem) {
    gap: 1.8rem;
  }

  @media (min-width: 25rem) {
    gap: 2.5rem;

    > div:first-of-type {
      padding-top: 0;
    }
  }

  @media (min-width: 48rem) {
    gap: 3rem;
  }

  @media (min-width: 64rem) {
    gap: 5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px, repeat(8, 1fr);
    justify-items: center;
    grid-template-areas:
      'header header'
      '.      expenses'
      'total  expenses'
      'total  expenses'
      'total  expenses'
      'total  income'
      'total  income'
      'total  income'
      '.      income';

    h1 {
      grid-area: header;
    }

    > div:first-of-type {
      grid-area: total;

      h2 {
        position: relative;
        bottom: 10%;
      }
    }

    > div:nth-of-type(2) {
      grid-area: expenses;
    }

    > div:nth-of-type(3) {
      grid-area: income;
    }
  }

  @media (min-width: 90rem) and (orientation: landscape) {
    grid-template-rows: 60px, repeat(9, 1fr);
    grid-template-areas:
      'header header'
      '.      expenses'
      'total  expenses'
      'total  expenses'
      'total  expenses'
      'total  income'
      'total  income'
      'total  income'
      '.      income'
      '.      .';
  }

  @media (min-width: 240rem) {
    gap: 12rem;
  }
`;

export const WelcomeText = styled.h1`
  width: 80%;
  font-size: 3rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  text-align: left;
  letter-spacing: 0.15rem;

  @media (min-width: 20rem) {
    font-size: 2.5rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 3rem;
  }

  @media (min-width: 25rem) {
    font-size: 3.5rem;
  }

  @media (min-width: 48rem) {
    font-size: 5rem;
    margin: 1.5rem 0 0.5rem 0;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 6rem;
    margin: 2rem 0 0 0;
  }

  @media (min-width: 90rem) and (orientation: landscape) {
    font-size: 6.5rem;
  }

  @media (min-width: 120rem) {
    font-size: 8rem;
  }

  @media (min-width: 240rem) {
    font-size: 15rem;
    margin: 10rem 0 0 0;
  }
`;

export const ChartText = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: var(--black-shade);
  letter-spacing: 0.15rem;
  word-spacing: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 20rem) {
    font-size: 1.5rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.6rem;
  }

  @media (min-width: 25rem) {
    font-size: 1.8rem;
    padding: 0.3rem 0;
  }

  @media (min-width: 48rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.6rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 2.8rem;
  }

  @media (min-width: 90rem) and (orientation: landscape) {
    font-size: 3rem;
  }

  @media (min-width: 120rem) {
    font-size: 3.5rem;
  }

  @media (min-width: 160rem) {
    padding: 1rem;
  }

  @media (min-width: 240rem) {
    font-size: 9rem;
  }
`;

export const ChartContainer = styled.div`
  width: calc(var(--vh, 1vh) * 45);
  width: 82vw;
  height: calc(var(--vh, 1vh) * 25);
  background-color: var(--white-shade);
  box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;

  @media (min-width: 20rem) {
    font-size: 0.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1rem;
  }

  @media (min-width: 25rem) {
    font-size: 1.2rem;
  }

  @media (min-width: 48rem) {
    width: 75vw;
    height: calc(var(--vh, 1vh) * 23);
    font-size: 1.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 42vw;
    height: 100%;
  }

  @media (min-width: 120rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 160rem) {
    font-size: 3rem;
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
  }
`;
