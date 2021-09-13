import styled from 'styled-components';

export const HistoryPageContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh,1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export const HistoryTitle = styled.h1`
  margin: 3rem 0;
  font-size: 2rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

  @media (min-width: 20rem){
    font-size: 4.5rem;
  }

`