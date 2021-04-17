import styled from 'styled-components';

export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 8rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const WelcomeText = styled.h1`
  width: 80%;
  font-size: 3rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  text-align: left;
`;

export const BalanceText = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: var(--black-shade);
  letter-spacing: 0.15rem;
  word-spacing: 0.5rem;
`;

export const ChartContainer = styled.div`
  width: 45vh;
  height: 25vh;
  background-color: var(--white-shade);
  box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.2rem;
`;
