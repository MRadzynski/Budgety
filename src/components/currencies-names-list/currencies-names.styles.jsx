import styled from 'styled-components';

export const CurrenciesList = styled.ul`
  width: 40%;
  height: 100%;
  background-color: black;
  list-style: none;
  position: absolute;
  right: 0;
  bottom: -90%;
  overflow: auto;
  text-align: center;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const CurrenciesListItem = styled.li`
  background-color: #eaeaea;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.8rem 0;
  border-bottom: 1px solid black;
`;
