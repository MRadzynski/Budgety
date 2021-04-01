import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ExpensesDetailsContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: var(--white-shade);
  border-radius: 50px 50px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 0 0 2rem 0;
  bottom: 0;
  z-index: 2;

  button {
    position: absolute;
    bottom: 3%;
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
