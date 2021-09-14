import styled from 'styled-components';

export const HistoryListContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 64rem){
    width: 80%;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    width: 85%;
  }

  @media (min-width: 120rem) {
    width: 60%;
  }

  @media (min-width: 240rem) {
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

  @media (min-width: 48rem){
    gap: 3rem;
  }

  @media (min-width: 64rem){
    gap: 4rem;
  }

  @media (min-width: 240rem) {
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

  @media (min-width: 48rem){
    border-radius: 20px;
  }

  @media (min-width: 160rem) {
    border-radius: 30px;
  }
`;

export const HistoryMonthlyChartsContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  gap: 2rem;

  @media (min-width: 48rem){
    gap: 3rem;
  }

  @media (min-width: 64rem){
    gap: 4rem;
  }

  @media (min-width: 80rem) {
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap:wrap;

    ${HistoryChartListItem} {
      width: calc(50% - 2rem)
    }
  }
`;