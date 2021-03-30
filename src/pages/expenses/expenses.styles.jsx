import styled from 'styled-components';

export const ExpensesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpensesTitle = styled.h1`
  font-size: 3.2rem;
  letter-spacing: 0.2rem;
  color: var(--white-shade);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 10%;
  left: 6%;
`;

export const ChartContainer = styled.div`
  width: 21rem;
  height: 21rem;
  background-color: var(--white-shade);
  border-radius: 50%;
  position: absolute;
  top: 4%;
  right: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartPrice = styled.h2`
  color: var(--black-shade);
  font-size: 2.8rem;
`;
