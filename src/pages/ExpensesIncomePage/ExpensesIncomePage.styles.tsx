import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const ChartContainer = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 50vw;
  justify-content: center;
  position: absolute;
  right: 4%;
  top: 4%;
  width: 50vw;

  @media ${breakpoints.tablet} {
    height: calc(var(--vh, 1vh) * 30);
    width: calc(var(--vh, 1vh) * 30);
  }

  @media ${breakpoints.xsLaptop} {
    height: calc(var(--vh, 1vh) * 37);
    width: calc(var(--vh, 1vh) * 37);
  }

  @media ${breakpoints.desktopUltrawide} {
    right: 12%;
  }
`;

export const ChartPrice = styled.h2`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  color: #050505;
  font-size: calc(var(--vh, 1vh) * 3.5);
  margin: auto;
  padding: 0.5rem;
  position: absolute;

  @media ${breakpoints.xsLaptop} {
    font-size: calc(var(--vh, 1vh) * 4.5);
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: calc(var(--vh, 1vh) * 5.5);
  }
`;

export const ExpensesIncomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
`;

export const ExpensesIncomeTitle = styled.h1`
  color: var(--white-shade);
  font-size: 8vw;
  left: 6%;
  letter-spacing: 0.2rem;
  position: absolute;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 10%;

  @media ${breakpoints.fold} {
    font-size: 2.1rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 2.4rem;
    left: 8%;
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
    font-size: 18rem;
    left: 15%;
    top: 12%;
  }
`;
