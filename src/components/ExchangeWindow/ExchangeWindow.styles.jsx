import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

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
    font-size: 1.6rem;
    padding: 0.3rem 0;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.6rem;
    padding: 0.4rem 0;
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

export const ExchangeList = styled.ul`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
  margin-top: 0.5rem;
  overflow: hidden scroll;
  position: relative;
  width: 100%;
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

export const ExchangeWindowContainer = styled.div`
  background-color: var(--white-shade);
  border-radius: 25px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 70%;
  padding-top: 0.5rem;
  width: 80%;

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
    height: 65%;
    padding-top: 1rem;
    width: 60%;
  }

  @media ${breakpoints.sDesktop} {
    margin-top: 2rem;
    width: 50%;
  }

  @media ${breakpoints.desktopFHD} {
    height: 60%;
    padding-top: 1.5rem;
    width: 45%;
  }

  @media ${breakpoints.desktopUltrawide} {
    padding-top: 1.7rem;
    width: 40%;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 4rem;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 50px;
    margin-top: 6rem;
    padding-top: 3rem;
  }
`;
