import styled from 'styled-components';

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

  @media (min-width: 20rem) {
    font-size: 2.6rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 25rem) {
    font-size: 3.2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 5rem;
  }

  @media (min-width: 64rem) and (min-height: 1366px) and (orientation: portrait) {
    font-size: 7rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 5rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 6rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 9rem;
  }

  @media (min-width: 240rem) {
    font-size: 13rem;
  }
`;
