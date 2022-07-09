import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

export const HistoryChartList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  width: 100%;

  @media ${breakpoints.tablet} {
    gap: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 6rem;
  }
`;

export const HistoryChartListItem = styled.li`
  align-items: center;
  background-color: var(--white-shade);
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.fold} {
    border-radius: 15px;
  }

  @media ${breakpoints.xsPhone} {
    border-radius: 10px;
  }

  @media ${breakpoints.lPhone} {
    border-radius: 15px;
  }

  @media ${breakpoints.tablet} {
    border-radius: 20px;
  }

  @media ${breakpoints.sLaptop} {
    border-radius: 25px;
  }

  @media ${breakpoints.desktopUltrawide} {
    border-radius: 30px;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 50px;
  }
`;

export const HistoryListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;

  @media ${breakpoints.xsLaptop} {
    width: 80%;
  }

  @media ${breakpoints.sLaptop} {
    width: 85%;
  }

  @media ${breakpoints.desktopFHD} {
    width: 60%;
  }

  @media ${breakpoints.desktop4K} {
    width: 45%;
  }
`;

export const HistoryMonthlyChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media ${breakpoints.tablet} {
    gap: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 4rem;
  }

  @media ${breakpoints.sLaptop} {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ${HistoryChartListItem} {
      width: calc(50% - 2rem);
    }
  }
`;
