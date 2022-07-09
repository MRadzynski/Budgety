import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

export const HistoryPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 3rem;
  width: 100%;

  @media ${breakpoints.desktopFHD} {
    padding-bottom: 5rem;
  }
`;

export const HistorySubtitle = styled.h3`
  color: var(--white-shade);
  font-size: 1.8rem;
  margin: 0 auto 2rem;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 80%;

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.phone} {
    font-size: 2rem;
    width: 90%;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
    width: 80%;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
    margin: -2rem auto 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3rem;
    margin: -2rem auto 4rem;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 3rem;
    margin: -1rem auto 4rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.6rem;
    margin: -2rem auto 4rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 4.2rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.8rem;
    margin-bottom: 6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
    margin: -5rem auto 8rem;
  }
`;

export const HistoryTitle = styled.h1`
  color: var(--white-shade);
  font-size: 2rem;
  margin: 3rem 0 2rem 0;
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
    font-size: 8rem;
    margin: 5rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 7rem;
    margin: 3rem 0;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 8.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 9rem;
    margin: 5rem 0;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 11rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 13rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 15rem;
    margin: 10rem 0;
  }
`;
