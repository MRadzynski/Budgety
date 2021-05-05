import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, vh) * 100);
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
  color: var(--white-shade);
  font-size: 3rem;
  letter-spacing: 0.1rem;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
