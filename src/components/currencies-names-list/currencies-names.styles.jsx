import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

export const CurrenciesList = styled.ul`
  background-color: #eaeaea;
  border-radius: 0.5rem;
  bottom: -100%;
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: 100%;
  list-style: none;
  overflow: auto;
  position: absolute;
  right: 0;
  text-align: center;
  width: 43%;

  @media ${breakpoints.xsPhone} {
    height: 110%;
  }

  @media ${breakpoints.tablet} {
    width: 40%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 30%;
  }
`;

export const CurrenciesListItem = styled.li`
  background-color: #eaeaea;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.8rem 0;

  &:hover {
    background-color: #dddddd;
  }

  @media ${breakpoints.fold} {
    font-size: 1.3rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.4rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
    letter-spacing: 0.15rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;
