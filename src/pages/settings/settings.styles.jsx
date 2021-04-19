import styled from 'styled-components';

export const SettingsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 5rem 1rem;
`;

export const SettingsTitle = styled.h1`
  font-size: 4rem;
  color: var(--white-shade);
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.4rem;
`;

export const SettingsGroupTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--black-shade);
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.2rem;
`;

export const SettingsGroup = styled.div`
  width: 80vw;
  height: 25vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white-shade);
  box-shadow: 0 8px 8px rgba(00, 00, 00, 0.25);
  border-radius: 25px;
`;
