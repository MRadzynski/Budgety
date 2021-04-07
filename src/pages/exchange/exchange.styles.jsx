import styled from 'styled-components';

export const ExchangeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  gap: 3rem;
`;

export const ExchangeTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: var(--white-shade);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ExchangeSubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  text-align: center;
  color: var(--white-shade);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
