import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

export const ExchangeButton = styled.button`
  background-color: var(--white-shade);
  border: 2px solid var(--secondary-color);
  border-radius: 15px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  color: var(--black-shade);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  width: 13rem;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: var(--light-gray);
  }

  @media ${breakpoints.fold} {
    font-size: 1.1rem;
    padding: 1.25rem 0.75rem;
    width: 10rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.1rem;
    padding: 1rem 1rem;
    width: 10rem;
  }

  @media ${breakpoints.phone} {
    font-size: 1.3rem;
    padding: 1rem 1rem;
    width: 11rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.3rem;
    padding: 1rem 0.5rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.4rem;
    margin-top: 0rem;
    padding: 1rem 1.5rem;
    width: 13rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2rem;
    padding: 1.5rem 2rem;
    width: 20rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 2.8rem;
    margin-top: 4rem;
    padding: 1.5rem 2rem;
    width: 25rem;
  }

  @media ${breakpoints.xsLaptop} {
    border-radius: 20px;
    font-size: 2rem;
    margin-top: 0;
    width: 20rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.8rem;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    width: 25rem;
  }

  @media ${breakpoints.desktopFHD} {
    border-radius: 25px;
  }

  @media ${breakpoints.desktopUltrawide} {
    border-radius: 30px;
    margin-top: 2.5rem;
    width: 30rem;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 6rem;
    padding: 2.5rem 2rem;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 50px;
    border-width: 6px;
    font-size: 5rem;
    margin-top: 10rem;
    padding: 4rem 3rem;
    width: 45rem;
  }
`;

export const ExchangeButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media ${breakpoints.fold} {
    gap: 1rem;
    margin-top: 1rem;
  }

  @media ${breakpoints.phone} {
    margin-top: -0.5rem;
  }

  @media ${breakpoints.lPhone} {
    margin-top: 0;
  }

  @media ${breakpoints.tablet} {
    gap: 8rem;
  }

  @media ${breakpoints.laptop} {
    gap: 8rem;
  }

  @media ${breakpoints.lLaptop} {
    margin-top: -1.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    gap: 10rem;
  }
`;

export const ExchangeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: calc(var(--vh, 1vh) * 100);
  padding: 6rem 2rem;
  width: 100vw;

  @media ${breakpoints.fold} {
    gap: 1.5rem;
    padding: 4rem 1rem;
  }

  @media ${breakpoints.xsPhone} {
    gap: 2rem;
    padding: 3rem 2rem;
  }

  @media ${breakpoints.sPhone} {
    gap: 2.5rem;
  }

  @media ${breakpoints.phone} {
    gap: 2rem;
  }

  @media ${breakpoints.lPhone} {
    gap: 2.5rem;
  }

  @media ${breakpoints.tablet} {
    gap: 3.5rem;
  }

  @media ${breakpoints.xsLaptop} {
    padding: 3rem 2rem;
  }
`;

export const ExchangeSubTitle = styled.h2`
  color: var(--white-shade);
  font-size: 1.8rem;
  font-weight: normal;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90%;

  @media ${breakpoints.xsPhone} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.phone} {
    font-size: 1.9rem;
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
    font-size: 6.2rem;
    margin-top: 2rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 7rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 9rem;
    margin-top: 2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 14rem;
    margin-top: 8rem;
  }
`;
