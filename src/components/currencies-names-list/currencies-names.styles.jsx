import styled from 'styled-components';

export const CurrenciesList = styled.ul`
  width: 43%;
  height: 100%;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  right: 0;
  bottom: -100%;
  border-radius: 0.5rem;
  background-color: #eaeaea;
  text-align: center;
  list-style: none;
  overflow: auto;

  @media (min-width: 20rem) {
    height: 110%;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    width: 40%;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 30%;
  }
`;

export const CurrenciesListItem = styled.li`
  padding: 0.8rem 0;
  border-bottom: 1px solid #cccccc;
  background-color: #eaeaea;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color:#dddddd;
  }

  @media (min-width: 20rem) {
    font-size: 1.3rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.4rem;
  }

  @media (min-width: 25rem) {
    font-size: 1.6rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 2.4rem;
    letter-spacing: 0.15rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 3rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 3.4rem;
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
  }
`;
