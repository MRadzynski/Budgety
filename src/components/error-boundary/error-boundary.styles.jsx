import { breakpoints } from '../../styles/breakpoints';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  width: 100vw;
`;

export const ErrorImageContainer = styled.div`
  height: calc(var(--vh, vh) * 50);
  width: calc(var(--vh, vh) * 50);

  img {
    height: 100%;
    width: 100%;
  }
`;

export const ErrorText = styled.h1`
  color: var(--white-shade);
  font-size: 3rem;
  letter-spacing: 0.1rem;
  padding: 0 1rem;
  text-align: center;
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
