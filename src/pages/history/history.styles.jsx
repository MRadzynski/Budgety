import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const HistoryPageContainer = styled.div`
  width: 100%;
  /* height: calc(var(--vh,1vh) * 100); */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

  @media ${breakpoints.desktopFHD} {
    padding-bottom: 5rem;
  }
`;

export const HistoryTitle = styled.h1`
  margin: 3rem 0 2rem 0;
  color: var(--white-shade);
  font-size: 2rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

  @media ${breakpoints.fold} {
    font-size: 3.5rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 4.5rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    margin: 5rem 0;
    font-size: 8rem;
  }

  @media ${breakpoints.xsLaptop} {
    margin: 3rem 0;
    font-size: 7rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 8.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    margin: 5rem 0;
    font-size: 9rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 11rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 13rem;
  }

  @media ${breakpoints.desktop4K} {
    margin: 10rem 0;
    font-size: 15rem;
  }
`;

export const HistorySubtitle = styled.h3`
  width: 80%;
  margin: 0 auto 2rem;
  color: var(--white-shade);
  font-size: 1.8rem;
  text-align:center;
  text-shadow: 0 4px 4px rgba(0,0,0,0.25);

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.phone} {
    width: 90%;
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    width: 80%;
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    margin-bottom: 3rem;
    font-size: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    margin: -2rem auto 4rem;
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    margin: -2rem auto 4rem;
    font-size: 3rem;
  }

  @media ${breakpoints.sLaptop} {
    margin: -1rem auto 4rem;
    font-size: 3rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    margin: -2rem auto 4rem;
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 4.2rem;
  }

  @media ${breakpoints.desktop2K} {
    margin-bottom: 6rem;
    font-size: 4.8rem;
  }

  @media ${breakpoints.desktop4K} {
    margin: -5rem auto 8rem;
    font-size: 7rem;
  }
`;