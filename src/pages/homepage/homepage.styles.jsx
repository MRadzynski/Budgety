import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const HomePageContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  padding: 6rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media ${breakpoints.xsPhone} {
    gap: 1.5rem;
  }

  @media ${breakpoints.sPhone} {
    gap: 1.8rem;
  }

  @media ${breakpoints.lPhone} {
    gap: 2.5rem;

    > div:first-of-type {
      padding-top: 0;
    }
  }

  @media ${breakpoints.tablet} {
    gap: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    gap: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
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

  @media ${breakpoints.lLaptop} {
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

  @media ${breakpoints.desktop4K} {
    gap: 12rem;
  }
`;

export const WelcomeText = styled.h1`
  width: 80%;
  color: var(--white-shade);
  font-size: 3rem;
  text-align: left;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.15rem;

  @media ${breakpoints.xsPhone} {
    font-size: 2.5rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 3.5rem;
  }

  @media ${breakpoints.tablet} {
    margin: 1.5rem 0 0.5rem 0;
    font-size: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    margin: 2rem 0 0 0;
    font-size: 6rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 6.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 8rem;
  }

  @media ${breakpoints.desktop4K} {
    margin: 10rem 0 0 0;
    font-size: 15rem;
  }
`;

export const ChartText = styled.h2`
  margin-bottom: 0.5rem;
  color: var(--black-shade);
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.15rem;
  word-spacing: 0.5rem;

  @media ${breakpoints.xsPhone} {
    font-size: 1.5rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.lPhone} {
    padding: 0.3rem 0;
    font-size: 1.8rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    padding: 1rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 9rem;
  }
`;

export const ChartContainer = styled.div`
  width: 82vw;
  height: calc(var(--vh, 1vh) * 25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  border-radius: 25px;
  background-color: var(--white-shade);
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

  @media ${breakpoints.xsPhone} {
    font-size: 0.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.2rem;
  }

  @media ${breakpoints.tablet} {
    width: 75vw;
    height: calc(var(--vh, 1vh) * 23);
    font-size: 1.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 42vw;
    height: 100%;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;

export const NoDataText = styled.h2`
  padding: 4rem 1rem;
  font-size: 1.6rem;

  @media ${breakpoints.sPhone} {
    padding: 4.5rem 1rem;
    font-size: 1.8rem;
  }

  @media ${breakpoints.lPhone} {
    padding: 5rem 1rem;
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    padding: 7rem 1rem;
    font-size: 3.2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    padding: 9rem 1rem;
    font-size: 3.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    padding: 6rem 1rem;
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    padding: 12rem 1rem;
    font-size: 6rem;
  }

  @media ${breakpoints.desktop4K} {
    padding: 15rem 1rem;
    font-size: 9rem;
  }
`;
