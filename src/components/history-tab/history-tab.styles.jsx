import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const HistoryTabContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 6);
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  padding-left: 1rem;
  border-radius: 10px;
  background-color: var(--white-shade);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: var(--light-gray);
  }

  @media ${breakpoints.fold} {
    border-radius: 15px;
    gap: 1rem;
    padding-left: 1.5rem;
  }

  @media ${breakpoints.xsPhone} {
    border-radius: 10px;
  }

  @media ${breakpoints.lPhone} {
    padding-left: 2rem;
    border-radius: 15px;
  }

  @media ${breakpoints.tablet} {
    height: calc(var(--vh, 1vh) * 6);
    padding-left: 2rem;
    border-radius: 20px;
  }

  @media ${breakpoints.lTabletPortrait} {
    height: calc(var(--vh, 1vh) * 6);
    gap: 2rem;
    padding-left: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: calc(var(--vh, 1vh) * 8);
    gap: 1.5rem;
    padding-left: 2rem;
  }

  @media ${breakpoints.sLaptop} {
    border-radius: 25px;
  }

  @media ${breakpoints.laptop} {
    height: calc(var(--vh, 1vh) * 7);
    padding-left: 3rem;
  }

  @media ${breakpoints.desktopFHD} {
    gap: 2.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    padding-left: 3.5rem;
    border-radius: 30px;
  }

  @media ${breakpoints.desktop2K} {
    height: calc(var(--vh, 1vh) * 6);
    gap: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    height: calc(var(--vh,1vh) * 7);
    padding-left: 5rem;
    border-radius: 50px;
  }
`;

export const DateDescription = styled.h3`
  color: var(--primary-color);
  font-size: 1.3rem;

  @media ${breakpoints.tablet} {
    font-size: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 5rem;
  }
`;

export const ExpandArrow = styled.span`
  color: var(--secondary-color);
  font-size: 1.5rem;
  transition: transform 0.2s linear;
  transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0)'};

  @media ${breakpoints.tablet} {
    font-size: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 5rem;
  }
`;

export const HistoryChartContainer = styled.div`
  width: 100%;
  height: 13rem;
  padding: 0.25rem 0 0.25rem;
  border-radius: 10px;
  background-color: var(--white-shade);

  @media ${breakpoints.tablet} {
    height: 15rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    width: 90%;
    height: 17rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 90%;
    height: 15rem;
  }

  @media ${breakpoints.sLaptop} {
    width: 85%;
    height: 17rem;
  }

  @media ${breakpoints.desktopFHD} {
    height: 20rem;
  }

  @media ${breakpoints.desktop4K} {
    height: 27rem;
  }
`;

export const HistoryChartTitle = styled.h3`
  padding-top:0.5rem;
  color: var(--primary-color);
  font-size: 1.5rem;
  word-spacing: 0.3rem;

  @media ${breakpoints.tablet} {
    padding-top: 1rem;
    font-size: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    padding: 1.2rem 0;
    font-size: 2.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 4.8rem;
  }
`;

export const HistoryChartBalance = styled.h2`
  padding-bottom: 1rem;
  color: ${({ balance }) => balance > 0 ? 'var(--successMessage)' : balance < 0 ? 'var(--errorMessage)' : 'var(--primary-color)'};
  font-size: 1.8rem;
  word-spacing: 0.5rem;

  @media ${breakpoints.tablet} {
    padding: 1rem 0;
    font-size: 2.4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    padding: 1.5rem 0;
    font-size: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.sLaptop} {
    padding: 2.5rem 0;
    font-size: 3rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    padding: 3rem 0;
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;

export const NoDataInfo = styled.h4`
  margin: 1rem 0 1.5rem 0;
  color: #9e9e9e;
  font-size: 1.5rem;

  @media ${breakpoints.tablet} {
    font-size: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    margin-top: 2rem;
    font-size: 2.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 4.8rem;
  }
`;