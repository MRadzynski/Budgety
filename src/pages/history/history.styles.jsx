import styled from 'styled-components';

export const HistoryPageContainer = styled.div`
  width: 100%;
  /* height: calc(var(--vh,1vh) * 100); */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

  @media (min-width: 120rem) {
    padding-bottom: 5rem;
  }
`;

export const HistoryTitle = styled.h1`
  margin: 3rem 0 2rem 0;
  color: var(--white-shade);
  font-size: 2rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

  @media (min-width: 20rem){
    font-size: 4.5rem;
  }

  @media (min-width: 48rem){
    font-size: 6rem;
  }

  @media (min-width: 64rem){
    margin: 5rem 0;
    font-size: 8rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin: 3rem 0;
    font-size: 7rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 8.5rem;
  }

  @media (min-width: 120rem) {
    margin: 5rem 0;
    font-size: 9rem;
  }

  @media (min-width: 240rem) {
    margin: 10rem 0;
    font-size: 15rem;
  }
`;

export const HistorySubtitle = styled.h3`
  width: 80%;
  margin: 0 auto 2rem;
  color: var(--white-shade);
  font-size: 1.8rem;
  text-align:center;
  text-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;