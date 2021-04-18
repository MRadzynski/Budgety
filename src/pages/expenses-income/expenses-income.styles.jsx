import styled from 'styled-components';

export const ExpensesIncomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpensesIncomeTitle = styled.h1`
  font-size: 8vw;
  letter-spacing: 0.2rem;
  color: var(--white-shade);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 10%;
  left: 6%;
`;

export const ChartContainer = styled.div`
  width: 25vh;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  position: absolute;
  top: 4%;
  right: 4%;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const ChartPrice = styled.h2`
  color: #050505;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 0.5rem;
  margin: auto;
  font-size: 3.5vh;
  position: absolute;
  /* display: none; */
`;
