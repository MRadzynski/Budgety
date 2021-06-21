import styled from 'styled-components';

export const SettingsContainer = styled.div`
  width: 100vw;
  height: var(--vh, 1vh) * 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;

  @media (min-width: 20rem) {
    margin-bottom: 0;
  }

  @media (min-width: 22.5rem) {
    gap: 3.5rem;
  }

  @media (min-width: 22.5rem) {
    gap: 4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    gap: 5rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    gap: 7rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    gap: 7rem;
  }

  @media (min-width: 240rem) {
    gap: 10rem;
  }
`;

export const SettingsTitle = styled.h1`
  padding-top: 4rem;
  color: var(--white-shade);
  font-size: 4rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.4rem;

  @media (min-width: 20rem) {
    font-size: 3rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 25rem) {
    font-size: 4.4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    margin-top: 2rem;
    font-size: 7rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 9rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 5.5rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    margin-bottom: -1rem;
    font-size: 13rem;
  }

  @media (min-width: 240rem) {
    margin-top: 2rem;
    font-size: 20rem;
  }
`;

export const SettingsGroupTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: var(--black-shade);
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.2rem;

  @media (min-width: 20rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.6rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    margin-top: 1rem;
    font-size: 5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    margin-top: 1rem;
    font-size: 4rem;
  }

  @media (min-width: 120rem) {
    font-size: 4.4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 6rem;
  }

  @media (min-width: 240rem) {
    font-size: 10rem;
  }
`;

export const SettingsGroup = styled.div`
  width: 80vw;
  height: calc(var(--vh, 1vh) * 20);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: var(--white-shade);
  border-radius: 25px;
  box-shadow: 0 8px 8px rgba(00, 00, 00, 0.25);

  :nth-of-type(3) {
    height: calc(var(--vh, 1vh) * 30);

    h2 {
      color: red;
    }
  }

  @media (min-width: 20rem) {
    height: calc(var(--vh, 1vh) * 18);
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 60vw;
  }

  @media (min-width: 80rem) {
    font-size: 3.8rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    width: 50vw;
  }

  @media (min-width: 120rem) {
    :nth-of-type(3) {
      height: calc(var(--vh, 1vh) * 32);
    }
  }

  @media (min-width: 160rem) {
    width: 40vw;
  }

  @media (min-width: 240rem) {
    border-radius: 40px;
  }
`;

export const SettingFieldContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 25rem) {
    margin-top: 0.5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-top: 0;
  }
`;

export const SettingLabel = styled.label`
  width: 60%;
  font-size: 2.2rem;
  font-weight: bold;
  background-color: var(--white-shade);
  color: var(--black-shade);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    font-size: 1.7rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.9rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 4.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 8rem;
  }
`;

export const SettingInput = styled.input`
  width: 45%;
  height: 80%;
  border: 0;
  border-radius: 1rem;
  outline: 0;
  background-color: #e0e0e0;
  font-size: 2.4rem;
  text-align: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &[type='text'] {
    height: 80%;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
    font-size: 1.8rem;
    cursor: text;
  }

  @media (min-width: 20rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2rem;

    &[type='text'] {
      font-size: 2rem;
    }
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;

    &[type='text'] {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    width: 40%;
    font-size: 3.8rem;
    letter-spacing: 0.25rem;

    &[type='text'] {
      width: 50%;
      font-size: 3.6rem;
      letter-spacing: 0.1rem;
    }
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 4.6rem;

    &[type='text'] {
      font-size: 4.6rem;
      letter-spacing: 0.2rem;
    }
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 30%;
    font-size: 2.8rem;
    letter-spacing: 0.1rem;

    &[type='text'] {
      width: 35%;
      font-size: 2.8rem;
    }
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 3.8rem;

    &[type='text'] {
      font-size: 3.8rem;
    }
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.4rem;

    &[type='text'] {
      font-size: 5.4rem;
    }
  }

  @media (min-width: 240rem) {
    font-size: 7.6rem;
    border-radius: 3rem;

    &[type='text'] {
      font-size: 7.6rem;
    }
  }
`;

export const DangerButton = styled.button`
  width: 40%;
  height: 60%;
  border: 0;
  border-radius: 1rem;
  font-size: 2rem;
  background-color: var(--errorMessage);
  color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #fe4337;
  }

  @media (min-width: 20rem) {
    font-size: 1.7rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.1rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    border-radius: 2rem;
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 4.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 35%;
    border-radius: 1.4rem;
    font-size: 3rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 3.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.4rem;
  }

  @media (min-width: 240rem) {
    border-radius: 3rem;
    font-size: 7.6rem;
  }
`;
