import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

export const ChartText = styled.h2`
  color: var(--black-shade);
  font-size: 2rem;
  letter-spacing: 0.15rem;
  margin-bottom: 0.5rem;
  text-align: center;
  word-spacing: 0.5rem;

  @media ${breakpoints.fold} {
    font-size: 1.5rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3rem;
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
  align-items: center;
  background-color: var(--white-shade);
  border-radius: 25px;
  box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: bold;
  height: calc(var(--vh, 1vh) * 25);
  justify-content: center;
  padding-top: 1rem;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 82vw;

  @media ${breakpoints.fold} {
    font-size: 0.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1rem;
  }

  @media ${breakpoints.phone} {
    height: calc(var(--vh, 1vh) * 24);
    padding-left: 0.5rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.2rem;
    height: calc(var(--vh, 1vh) * 25);
    padding-left: 0;
  }

  @media ${breakpoints.tablet} {
    font-size: 1.6rem;
    height: calc(var(--vh, 1vh) * 23);
    width: 75vw;
  }

  @media ${breakpoints.xsLaptop} {
    height: 100%;
    width: 42vw;
  }

  @media ${breakpoints.laptop} {
    height: calc(var(--vh, 1vh) * 33);
  }

  @media ${breakpoints.lLaptop} {
    height: calc(var(--vh, 1vh) * 35);
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.4rem;
    height: 100%;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop2k} {
    height: 80%;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
    padding: 0 2rem;
  }
`;

export const HomePageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: calc(var(--vh, 1vh) * 100);
  padding: 6rem 1rem 3rem 1rem;
  width: 100vw;

  @media ${breakpoints.fold} {
    gap: 2rem;
  }

  @media ${breakpoints.xsPhone} {
    gap: 1.5rem;
  }

  @media ${breakpoints.sPhone} {
    gap: 1.8rem;
  }

  @media ${breakpoints.phone} {
    gap: 1.5rem;

    > div:first-of-type {
      padding-left: 0;
    }
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px, repeat(8, 1fr);
    justify-items: center;

    h1 {
      grid-area: header;
    }

    > div:first-of-type {
      grid-area: total;

      h2 {
        bottom: 10%;
        position: relative;
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
    grid-template-rows: 60px, repeat(9, 1fr);
  }

  @media ${breakpoints.desktop4K} {
    gap: 12rem;
  }
`;

export const NoDataText = styled.h2`
  font-size: 1.6rem;
  padding: 4rem 1rem;
  text-align: center;

  @media ${breakpoints.sPhone} {
    font-size: 1.8rem;
    padding: 4.5rem 1rem;
  }

  @media ${breakpoints.phone} {
    font-size: 1.8rem;
    padding: 3.5rem 1rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
    padding: 5rem 1rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.2rem;
    padding: 7rem 1rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.6rem;
    padding: 9rem 1rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
    padding: 6rem 1rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 6rem;
    padding: 12rem 1rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 9rem;
    padding: 15rem 1rem;
  }
`;

export const ScrollableChartContainer = styled.div`
  height: 80%;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
`;

export const WelcomeText = styled.h1`
  color: var(--white-shade);
  font-size: 3rem;
  letter-spacing: 0.15rem;
  text-align: left;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  width: 80%;

  @media ${breakpoints.fold} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 2.5rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.phone} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 5rem;
    margin: 1.5rem 0 0.5rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 6rem;
    margin: 2rem 0 0 0;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 6.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 8rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 15rem;
    margin: 10rem 0 0 0;
  }
`;
