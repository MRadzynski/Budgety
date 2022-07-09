import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

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
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0)')};
  transition: transform 0.2s linear;

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

export const HistoryChartBalance = styled.h2`
  color: ${({ balance }) =>
    balance > 0
      ? 'var(--successMessage)'
      : balance < 0
      ? 'var(--errorMessage)'
      : 'var(--primary-color)'};
  font-size: 1.8rem;
  padding-bottom: 1rem;
  word-spacing: 0.5rem;

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
    padding: 1rem 0;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3rem;
    padding: 1.5rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 3rem;
    padding: 2.5rem 0;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.6rem;
    padding: 3rem 0;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;

export const HistoryChartContainer = styled.div`
  background-color: var(--white-shade);
  border-radius: 10px;
  height: 13rem;
  padding: 0.25rem 0 0.25rem;
  width: 100%;

  @media ${breakpoints.tablet} {
    height: 15rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    height: 17rem;
    width: 90%;
  }

  @media ${breakpoints.xsLaptop} {
    height: 15rem;
    width: 90%;
  }

  @media ${breakpoints.sLaptop} {
    height: 17rem;
    width: 85%;
  }

  @media ${breakpoints.desktopFHD} {
    height: 20rem;
  }

  @media ${breakpoints.desktop4K} {
    height: 27rem;
  }
`;

export const HistoryChartTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  padding-top: 0.5rem;
  word-spacing: 0.3rem;

  @media ${breakpoints.tablet} {
    font-size: 2rem;
    padding-top: 1rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 2.6rem;
    padding: 1.2rem 0;
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

export const HistoryTabContainer = styled.div`
  align-items: center;
  background-color: var(--white-shade);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 2rem;
  height: calc(var(--vh, 1vh) * 6);
  justify-content: start;
  padding-left: 1rem;
  width: 100%;
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
    border-radius: 15px;
    padding-left: 2rem;
  }

  @media ${breakpoints.tablet} {
    border-radius: 20px;
    height: calc(var(--vh, 1vh) * 6);
    padding-left: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    gap: 2rem;
    height: calc(var(--vh, 1vh) * 6);
    padding-left: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 1.5rem;
    height: calc(var(--vh, 1vh) * 8);
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
    border-radius: 30px;
    padding-left: 3.5rem;
  }

  @media ${breakpoints.desktop2K} {
    gap: 3rem;
    height: calc(var(--vh, 1vh) * 6);
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 50px;
    height: calc(var(--vh, 1vh) * 7);
    padding-left: 5rem;
  }
`;

export const NoDataInfo = styled.h4`
  color: #9e9e9e;
  font-size: 1.5rem;
  margin: 1rem 0 1.5rem 0;

  @media ${breakpoints.tablet} {
    font-size: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 2.6rem;
    margin-top: 2rem;
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

export const ScrollableChartContainer = styled.div`
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
`;
