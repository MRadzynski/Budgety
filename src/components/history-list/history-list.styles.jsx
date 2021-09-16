import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const HistoryListContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.xsLaptop}  {
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

export const HistoryChartList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${breakpoints.tablet} {
    gap: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 4rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 6rem;
  }
`;

export const HistoryChartListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: var(--white-shade);
  box-shadow: 0 6px 6px rgba(0,0,0,0.25);

  @media ${breakpoints.tablet} {
    border-radius: 20px;
  }

  @media ${breakpoints.desktopUltrawide} {
    border-radius: 30px;
  }
`;

export const HistoryMonthlyChartsContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  gap: 2rem;

  @media ${breakpoints.tablet} {
    gap: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 4rem;
  }

  @media ${breakpoints.sLaptop} {
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap:wrap;

    ${HistoryChartListItem} {
      width: calc(50% - 2rem)
    }
  }
`;