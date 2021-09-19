import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const ErrorContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const ErrorImageContainer = styled.div`
  width: calc(var(--vh, vh) * 50);
  height: calc(var(--vh, vh) * 50);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ErrorText = styled.h1`
  padding: 0 1rem;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.1rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.xsPhone} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 7rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 5rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 6rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 9rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 13rem;
  }
`;
