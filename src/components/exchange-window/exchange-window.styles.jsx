import styled from 'styled-components';

export const ExchangeWindowContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  border-radius: 25px;
  background-color: var(--white-shade);
  box-shadow: 0 6px 6px rgba(0,0,0,0.25);

  @media (min-width: 20rem) {
    margin-top: -0.5rem;
  }

  @media (min-width: 22.5rem) {
    margin-top: -0.5rem;
  }

  @media (min-width: 25rem) {
    margin-top: -0.5rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    margin-top: 4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 60%;
    margin-top: 1rem;
    padding-top: 1rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    width: 50%;
    margin-top: 2rem;
  }

  @media (min-width: 120rem) {
    width: 45%;
    padding-top: 1.5rem;
  }

  @media (min-width: 160rem) {
    width: 40%;
    padding-top: 1.7rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    margin-top: 4rem;
  }

  @media (min-width: 240rem) {
    margin-top: 6rem;
    padding-top: 3rem;
  }
`;

export const ExchangeList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
  border-radius: 25px;
  list-style: none;
  overflow: hidden scroll;
`;

export const ExchangeListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;

  &:nth-child(2n) {
    background-color: var(--light-gray);
  }

  @media (min-width: 22.5rem) {
    padding: 3rem 2.5rem;
  }

  @media (min-width: 25rem) {
    padding: 3rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    padding: 3rem 5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    padding: 3rem 4rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
    padding: 4rem;
  }

  @media (min-width: 120rem) {
    padding: 4rem 5rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    padding: 5rem 7rem;
  }

  @media (min-width: 240rem) {
    padding: 7rem 10rem;
  }
`;

export const CurrencyRate = styled.h2`
  font-size: ${({ length }) => (length > 13 ? '2.2rem' : '2.4rem')};
  letter-spacing: ${({ length }) => (length > 13 ? '0' : '0.1rem')};

  @media (min-width: 20rem) {
    font-size: ${({ length }) => (length > 11 ? '1.7rem' : '2rem')};
  }

  @media (min-width: 22.5rem) {
    font-size: ${({ length }) => (length > 11 ? '1.9rem' : '2.1rem')};
  }

  @media (min-width: 25rem) {
    font-size: ${({ length }) => (length > 11 ? '2.2rem' : '2.4rem')};
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.8rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 3.6rem;
  }

  @media (min-width: 120rem) {
    font-size: 3.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 4.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 7rem;
  }
`;

export const CurrencyName = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.15rem;

  @media (min-width: 22.5rem) {
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.8rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 3.6rem;
  }

  @media (min-width: 120rem) {
    font-size: 3.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 4.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 7rem;
  }
`;

export const DateInfo = styled.h3`
  color: var(--black-shade);
  font-size: 1.6rem;
  text-align: center;

  @media (min-width: 20rem) {
    font-size: 1.4rem;
  }

  @media (min-width: 22.5rem) {
    padding: 0.3rem 0;
    font-size: 1.6rem;
  }

  @media (min-width: 25rem) {
    padding: 0.4rem 0;
    font-size: 1.8rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 2.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 85rem) and (orientation: landscape) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
  }
`;
