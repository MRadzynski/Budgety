import styled from 'styled-components';

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

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 50vw;
  }

  @media (min-width: 90rem) and (min-height: 900px) {
    width: 45vw;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    width: 40vw;
  }

  @media (min-width: 120rem) {
    width: 35vw;
  }

  @media (min-width: 160rem) {
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

  @media (min-width: 23rem) {
    margin: -2rem 0 2rem 0;
    padding: 0 2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    margin: 0rem 0 3rem 0;
    font-size: 6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 6rem;
  }

  @media (min-width: 120rem) {
    font-size: 7rem;
  }

  @media (min-width: 160rem) {
    margin: 0rem 0 4rem 0;
  }

  @media (min-width: 240rem) {
    margin: 0rem 0 7rem 0;
    font-size: 12rem;
  }
`;
