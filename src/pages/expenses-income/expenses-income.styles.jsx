import styled from 'styled-components';

export const ExpensesIncomePageContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
`;

export const ExpensesIncomeTitle = styled.h1`
  position: absolute;
  top: 10%;
  left: 6%;
  color: var(--white-shade);
  font-size: 8vw;
  letter-spacing: 0.2rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    left: 8%;
    font-size: 2.4rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.7rem;
  }

  @media (min-width: 25rem) {
    font-size: 3rem;
  }

  @media (min-width: 48rem) {
    font-size: 6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 7.5rem;
  }

  @media (min-width: 90rem) {
    font-size: 8.5rem;
  }

  @media (min-width: 120rem) {
    font-size: 10rem;
  }

  @media (min-width: 160rem) {
    left: 12%;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 13rem;
  }

  @media (min-width: 240rem) {
    top: 12%;
    left: 15%;
    font-size: 18rem;
  }
`;

export const ChartContainer = styled.div`
  width: 50vw;
  height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4%;
  right: 4%;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  @media (min-width: 48rem) {
    width: calc(var(--vh, 1vh) * 30);
    height: calc(var(--vh, 1vh) * 30);
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: calc(var(--vh, 1vh) * 37);
    height: calc(var(--vh, 1vh) * 37);
  }

  @media (min-width: 160rem) {
    right: 12%;
  }
`;

export const ChartPrice = styled.h2`
  position: absolute;
  margin: auto;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #050505;
  font-size: calc(var(--vh, 1vh) * 3.5);

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: calc(var(--vh, 1vh) * 4.5);
  }

  @media (min-width: 160rem) {
    font-size: calc(var(--vh, 1vh) * 5.5);
  }
`;
