import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

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

  @media ${breakpoints.xsPhone} {
    left: 8%;
    font-size: 2.4rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.7rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 7.5rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 8.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 10rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    left: 12%;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 13rem;
  }

  @media ${breakpoints.desktop4K} {
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

  @media ${breakpoints.tablet} {
    width: calc(var(--vh, 1vh) * 30);
    height: calc(var(--vh, 1vh) * 30);
  }

  @media ${breakpoints.xsLaptop} {
    width: calc(var(--vh, 1vh) * 37);
    height: calc(var(--vh, 1vh) * 37);
  }

  @media ${breakpoints.desktopUltrawide} {
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

  @media ${breakpoints.xsLaptop} {
    font-size: calc(var(--vh, 1vh) * 4.5);
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: calc(var(--vh, 1vh) * 5.5);
  }
`;
