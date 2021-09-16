import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const ExchangeContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 6rem 2rem;

  @media ${breakpoints.xsPhone} {
    gap: 2rem;
    padding: 3rem 2rem;
  }

  @media ${breakpoints.sPhone} {
    gap: 2.5rem;
  }

  @media ${breakpoints.tablet} {
    gap: 3.5rem;
  }

  @media ${breakpoints.xsLaptop} {
    padding: 3rem 2rem;
  }
`;

export const ExchangeTitle = styled.h1`
  color: var(--white-shade);
  font-size: 3rem;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.xsPhone} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    margin-top: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 6rem;
  }

  @media ${breakpoints.laptop} {
    margin-top: 2rem;
    font-size: 6.2rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 7rem;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 2rem;
    font-size: 9rem;
  }

  @media ${breakpoints.desktop4K} {
    margin-top: 8rem;
    font-size: 14rem;
  }
`;

export const ExchangeSubTitle = styled.h2`
  width: 90%;
  color: var(--white-shade);
  font-size: 1.8rem;
  font-weight: normal;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.xsPhone} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
  }
`;

export const ExchangeButtonsContainer = styled.div`
  display:flex;
  gap: 2rem;

  @media ${breakpoints.tablet} {
    gap: 8rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    gap: 10rem;
  }
`;

export const ExchangeButton = styled.button`
  width: 13rem;
  padding: 1rem 1.5rem;
  border: 2px solid var(--secondary-color);
  border-radius: 15px;
  background-color: var(--white-shade);
  color: var(--black-shade);
  font-size: 1.5rem;
  box-shadow: 0 6px 6px rgba(0,0,0,0.25);
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray)
  }

  @media ${breakpoints.xsPhone} {
    width: 10rem;
    padding: 1rem 1rem;
    font-size: 1.1rem;
  }

  @media ${breakpoints.sPhone} {
    width: 11rem;
    padding: 1rem 1rem;
    font-size: 1.3rem;
  }

  @media ${breakpoints.lPhone} {
    width: 13rem;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }

  @media ${breakpoints.tablet} {
    width: 20rem;
    padding: 1.5rem 2rem;
    font-size: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    width: 25rem;
    margin-top: 4rem;
    padding: 1.5rem 2rem;
    font-size: 2.8rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 20rem;
    font-size: 2rem;
    border-radius: 20px;
  }

  @media ${breakpoints.sLaptop} {
    width: 25rem;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktopFHD} {
    border-radius: 25px;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 30rem;
    margin-top: 2.5rem;
    border-radius: 30px;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 6rem;
    padding: 2.5rem 2rem;
  }

  @media ${breakpoints.desktop4K} {
    width: 45rem;
    margin-top: 10rem;
    padding: 4rem 3rem;
    border-radius: 50px;
    font-size: 5rem;
  }
`;