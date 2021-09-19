import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const NotFoundImageContainer = styled.div`
  width: 70vw;
  height: calc(var(--vh, 1vh) * 45);

  img {
    width: 100%;
    height: 100%;
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
  margin: -2rem 0 1rem 0;
  padding: 0 1rem;
  font-size: 3.5rem;
  text-align: center;
  letter-spacing: 0.2rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.phone} {
    margin: -2rem 0 2rem 0;
    padding: 0 2rem;
  }

  @media ${breakpoints.tablet} {
    margin: 0rem 0 3rem 0;
    font-size: 6rem;
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
    margin: 0rem 0 7rem 0;
    font-size: 12rem;
  }
`;
