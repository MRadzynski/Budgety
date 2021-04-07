import styled from 'styled-components';

export const ExchangeWindowContainer = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: var(--white-shade);
`;

export const ExchangeList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  overflow: hidden scroll;
  border-radius: 25px;
`;

export const ExchangeListItem = styled.li`
  display: flex;
  padding: 3rem;

  &:nth-child(2n) {
    background-color: #e0e0e0;
  }
`;
