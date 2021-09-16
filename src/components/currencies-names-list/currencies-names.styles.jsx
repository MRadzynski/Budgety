import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

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
  padding: 0.8rem 0;
  border-bottom: 1px solid #cccccc;
  background-color: #eaeaea;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color:#dddddd;
  }

  @media ${breakpoints.xsPhone} {
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
