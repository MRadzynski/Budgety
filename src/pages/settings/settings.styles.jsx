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

export const SettingsForm = styled.form`
  width: 100%;
  height: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SettingFieldContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SettingLabel = styled.label`
  width: 60%;
  background-color: var(--white-shade);
  color: var(--black-shade);
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const SettingInput = styled.input`
  width: 40%;
  height: 70%;
  background-color: #e0e0e0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  outline: 0;
  border: 0;
  border-radius: 1.5rem;
  font-size: 2.4rem;
  text-align: center;
`;

export const EraseButton = styled.button`
  width: 40%;
  height: 100%;
  background-color: var(--errorMessage);
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #fe4337;
  }
`;

export const SettingList = styled.ul`
  width: 40%;
  height: 100%;
  background-color: black;
  list-style: none;
  position: absolute;
  right: 0;
  bottom: -90%;
  overflow: auto;
  text-align: center;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const SettingItem = styled.li`
  background-color: #eaeaea;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.8rem 0;
  border-bottom: 1px solid black;
`;
