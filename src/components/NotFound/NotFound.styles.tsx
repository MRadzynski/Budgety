import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  width: 100vw;
`;

export const NotFoundImageContainer = styled.div`
  height: calc(var(--vh, 1vh) * 45);
  width: 70vw;

  img {
    height: 100%;
    width: 100%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 50vw;
  }

  @media ${breakpoints.lLaptop} {
    width: 45vw;
  }

  @media ${breakpoints.sDesktop} {
    width: 40vw;
  }

  @media ${breakpoints.desktopFHD} {
    width: 35vw;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 30vw;
  }
`;

export const NotFoundText = styled.h1`
  color: var(--white-shade);
  font-size: 3.5rem;
  letter-spacing: 0.2rem;
  margin: -2rem 0 1rem 0;
  padding: 0 1rem;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.phone} {
    margin: -2rem 0 2rem 0;
    padding: 0 2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 6rem;
    margin: 0rem 0 3rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 6rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 7rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    margin: 0rem 0 4rem 0;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 12rem;
    margin: 0rem 0 7rem 0;
  }
`;
