import styled from 'styled-components';

export const ExchangeWindowContainer = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: var(--white-shade);
`;

export const ExchangeList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  overflow: hidden scroll;
  border-radius: 25px;
`;

export const ExchangeListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 3rem;

  &:nth-child(2n) {
    background-color: #e0e0e0;
  }
`;

export const CurrencyRate = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
`;

export const CurrencyName = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
`;

export const DateInfo = styled.h3`
  color: var(--black-shade);
  font-size: 1.6rem;
  text-align: center;
`;
