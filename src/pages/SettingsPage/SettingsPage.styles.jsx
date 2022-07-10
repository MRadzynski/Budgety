import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const DangerButton = styled.button`
  background-color: var(--errorMessage);
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font-size: 2rem;
  height: 60%;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 40%;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #fe4337;
  }

  @media ${breakpoints.fold} {
    font-size: 1.7rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.1rem;
  }

  @media ${breakpoints.tablet} {
    border-radius: 2rem;
    font-size: 3.2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    border-radius: 1.4rem;
    font-size: 3rem;
    width: 35%;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 3rem;
    font-size: 7.6rem;
  }
`;

export const SettingFieldContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  justify-content: space-between;
  position: relative;
  width: 90%;

  @media ${breakpoints.lPhone} {
    margin-top: 0.5rem;
  }

  @media ${breakpoints.xsLaptop} {
    margin-top: 0;
  }
`;

export const SettingInput = styled.input`
  background-color: var(--light-gray);
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 2.4rem;
  height: 80%;
  outline: 0;
  text-align: center;
  width: 45%;

  &[type='text'] {
    cursor: text;
    font-size: 1.8rem;
    height: 80%;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }

  @media ${breakpoints.fold} {
    font-size: 1.7rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;

    &[type='text'] {
      font-size: 2rem;
    }
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;

    &[type='text'] {
      font-size: 2.2rem;
    }
  }

  @media ${breakpoints.tablet} {
    font-size: 3.8rem;
    letter-spacing: 0.25rem;
    width: 40%;

    &[type='text'] {
      font-size: 3.6rem;
      letter-spacing: 0.1rem;
      width: 50%;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.6rem;

    &[type='text'] {
      font-size: 4.6rem;
      letter-spacing: 0.2rem;
    }
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
    width: 30%;

    &[type='text'] {
      font-size: 2.8rem;
      width: 35%;
    }
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;

    &[type='text'] {
      font-size: 3.2rem;
    }
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;

    &[type='text'] {
      font-size: 5.4rem;
    }
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 3rem;
    font-size: 7.6rem;

    &[type='text'] {
      font-size: 7.6rem;
    }
  }
`;

export const SettingLabel = styled.label`
  background-color: var(--white-shade);
  color: var(--black-shade);
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  width: 60%;

  @media ${breakpoints.fold} {
    font-size: 1.7rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.9rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;

export const SettingsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: var(--vh, 1vh) * 100;
  margin-bottom: 5rem;
  width: 100vw;

  @media ${breakpoints.fold} {
    gap: 2.5rem;
  }

  @media ${breakpoints.xsPhone} {
    margin-bottom: 0;
  }

  @media ${breakpoints.sPhone} {
    gap: 3rem;
  }

  @media ${breakpoints.tablet} {
    gap: 4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    gap: 7rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 3.5rem;
  }

  @media ${breakpoints.desktop2K} {
    gap: 7rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 10rem;
  }
`;

export const SettingsGroup = styled.div`
  align-items: center;
  background-color: var(--white-shade);
  border-radius: 25px;
  box-shadow: 0 8px 8px rgba(00, 00, 00, 0.25);
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 20);
  padding: 1rem;
  width: 80vw;

  :nth-of-type(3) {
    height: calc(var(--vh, 1vh) * 30);

    h2 {
      color: red;
    }
  }

  @media ${breakpoints.fold} {
    height: calc(var(--vh, 1vh) * 17);
    width: 85vw;
  }

  @media ${breakpoints.xsPhone} {
    height: calc(var(--vh, 1vh) * 18);
    width: 80vw;
  }

  @media ${breakpoints.xsLaptop} {
    width: 60vw;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.sDesktop} {
    width: 50vw;
  }

  @media ${breakpoints.desktopFHD} {
    :nth-of-type(3) {
      height: calc(var(--vh, 1vh) * 32);
    }
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 40vw;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 40px;
  }
`;

export const SettingsGroupTitle = styled.h2`
  color: var(--black-shade);
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

  @media ${breakpoints.fold} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 5rem;
    margin-top: 1rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.8rem;
    margin-top: 1rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 10rem;
  }
`;

export const SettingsTitle = styled.h1`
  color: var(--white-shade);
  font-size: 4rem;
  letter-spacing: 0.4rem;
  padding-top: 3rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

  @media ${breakpoints.fold} {
    font-size: 3.5rem;
    padding-top: 4rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 4.4rem;
    padding-top: 4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 7rem;
    padding-top: 4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 9rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 5.5rem;
    padding-top: 2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 13rem;
    margin-bottom: -1rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 20rem;
    margin-top: 2rem;
  }
`;
