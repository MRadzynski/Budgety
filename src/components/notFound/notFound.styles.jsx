import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const NotFoundImageContainer = styled.div`
  width: 70vw;
  height: calc(var(--vh, 1vh) * 45);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NotFoundText = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 0.2rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
