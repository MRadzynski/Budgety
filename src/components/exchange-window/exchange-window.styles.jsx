import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const ExchangeWindowContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  border-radius: 25px;
  background-color: var(--white-shade);
  box-shadow: 0 6px 6px rgba(0,0,0,0.25);

  @media ${breakpoints.fold} {
    margin-top: 0;
  }

  @media ${breakpoints.xsPhone} {
    height: 65%;
    margin-top: -0.5rem;
  }

  @media ${breakpoints.sPhone} {
    margin-top: -0.5rem;
  }

  @media ${breakpoints.lPhone} {
    margin-top: -0.5rem;
  }

  @media ${breakpoints.tablet} {
    margin-top: 0;
  }

  @media ${breakpoints.xsLaptop} {
    width: 60%;
    height: 65%;
    padding-top: 1rem;
  }

  @media ${breakpoints.sDesktop} {
    width: 50%;
    margin-top: 2rem;
  }

  @media ${breakpoints.desktopFHD} {
    width: 45%;
    height: 60%;
    padding-top: 1.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 40%;
    padding-top: 1.7rem;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 4rem;
  }

  @media ${breakpoints.desktop4K} {
    margin-top: 6rem;
    padding-top: 3rem;
    border-radius: 50px;
  }
`;

export const ExchangeList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
  border-radius: 25px;
  list-style: none;
  overflow: hidden scroll;
`;

export const ExchangeListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;

  &:nth-child(2n) {
    background-color: var(--light-gray);
  }

  @media ${breakpoints.fold} {
    padding: 2.5rem;
  }

  @media ${breakpoints.xsPhone} {
    padding: 3rem 2rem;
  }

  @media ${breakpoints.sPhone} {
    padding: 3rem 2.5rem;
  }

  @media ${breakpoints.lPhone} {
    padding: 3rem;
  }

  @media ${breakpoints.tablet} {
    padding: 3rem 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    padding: 3rem 4rem;
  }

  @media ${breakpoints.laptop} {
    padding: 4rem;
  }

  @media ${breakpoints.desktopFHD} {
    padding: 4rem 5rem;
  }

  @media ${breakpoints.desktop2K} {
    padding: 5rem 7rem;
  }

  @media ${breakpoints.desktop4K} {
    padding: 7rem 10rem;
  }
`;

export const CurrencyRate = styled.h2`
  font-size: ${({ length }) => (length > 13 ? '2.2rem' : '2.4rem')};
  letter-spacing: ${({ length }) => (length > 13 ? '0' : '0.1rem')};

  @media ${breakpoints.fold} {
    font-size: ${({ length }) => (length > 11 ? '1.3rem' : '1.6rem')};
  }

  @media ${breakpoints.xsPhone} {
    font-size: ${({ length }) => (length > 11 ? '1.7rem' : '2rem')};
  }

  @media ${breakpoints.sPhone} {
    font-size: ${({ length }) => (length > 11 ? '1.9rem' : '2.1rem')};
  }

  @media ${breakpoints.lPhone} {
    font-size: ${({ length }) => (length > 11 ? '2rem' : '2.2rem')};
  }

  @media ${breakpoints.tablet} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
  }
`;

export const CurrencyName = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.15rem;

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
  }
`;

export const DateInfo = styled.h3`
  color: var(--black-shade);
  font-size: 1.6rem;
  text-align: center;

  @media ${breakpoints.fold} {
    font-size: 1.3rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.4rem;
  }

  @media ${breakpoints.sPhone} {
    padding: 0.3rem 0;
    font-size: 1.6rem;
  }

  @media ${breakpoints.lPhone} {
    padding: 0.4rem 0;
    font-size: 1.6rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;
