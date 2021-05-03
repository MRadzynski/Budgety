import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ExpensesIncomeDetailsContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 60);
  background-color: var(--white-shade);
  border-radius: 50px 50px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 0;
  position: relative;
  bottom: -40%;
  z-index: 2;

  button {
    position: absolute;
    bottom: 3%;
    left: 25%;
  }
`;

export const OverlapsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Overlap = styled(Link)`
  width: 30%;
  border-top: ${({ active }) =>
    active ? '0.25rem solid var(--primary-color)' : '0'};
  margin-top: 5px;
  padding-top: 3px;
  font-size: 2.5rem;
  text-align: center;
  text-decoration: none;
  color: ${({ active }) =>
    active ? 'var(--primary-color)' : 'var(--black-shade)'};
  font-weight: bold;
  -webkit-tap-highlight-color: transparent;
`;
