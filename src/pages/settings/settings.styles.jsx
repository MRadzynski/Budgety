import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const SettingsContainer = styled.div`
  width: 100vw;
  height: var(--vh, 1vh) * 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;

  @media ${breakpoints.xsPhone} {
    margin-bottom: 0;
  }

  @media ${breakpoints.sPhone} {
    gap: 4rem;
  }

  @media ${breakpoints.tablet} {
    gap: 5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    gap: 7rem;
  }

  @media ${breakpoints.desktop2K} {
    gap: 7rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 10rem;
  }
`;

export const SettingsTitle = styled.h1`
  padding-top: 4rem;
  color: var(--white-shade);
  font-size: 4rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.4rem;

  @media ${breakpoints.xsPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.tablet} {
    margin-top: 2rem;
    font-size: 7rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 9rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 5.5rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 8rem;
  }

  @media ${breakpoints.desktop2K} {
    margin-bottom: -1rem;
    font-size: 13rem;
  }

  @media ${breakpoints.desktop4K} {
    margin-top: 2rem;
    font-size: 20rem;
  }
`;

export const SettingsGroupTitle = styled.h2`
  margin-bottom: 1rem;
  color: var(--black-shade);
  font-size: 2.5rem;
  text-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);
  letter-spacing: 0.2rem;

  @media ${breakpoints.xsPhone} {
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
    margin-top: 1rem;
    font-size: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.laptop} {
    margin-top: 1rem;
    font-size: 4rem;
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

  @media ${breakpoints.xsPhone} {
    height: calc(var(--vh, 1vh) * 18);
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

export const SettingFieldContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${breakpoints.lPhone} {
    margin-top: 0.5rem;
  }

  @media ${breakpoints.xsLaptop} {
    margin-top: 0;
  }
`;

export const SettingLabel = styled.label`
  width: 60%;
  background-color: var(--white-shade);
  color: var(--black-shade);
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.xsPhone} {
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
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;

export const SettingInput = styled.input`
  width: 45%;
  height: 80%;
  border: 0;
  border-radius: 1rem;
  outline: 0;
  background-color: var(--light-gray);
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
    width: 40%;
    font-size: 3.8rem;
    letter-spacing: 0.25rem;

    &[type='text'] {
      width: 50%;
      font-size: 3.6rem;
      letter-spacing: 0.1rem;
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
    width: 30%;
    font-size: 2.8rem;
    letter-spacing: 0.1rem;

    &[type='text'] {
      width: 35%;
      font-size: 2.8rem;
    }
  }

  @media ${breakpoints.laptop} {
    font-size: 3.8rem;

    &[type='text'] {
      font-size: 3.8rem;
    }
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;

    &[type='text'] {
      font-size: 5.4rem;
    }
  }

  @media ${breakpoints.desktop4K} {
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
  background-color: var(--errorMessage);
  color: white;
  font-size: 2rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #fe4337;
  }

  @media ${breakpoints.xsPhone} {
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
    width: 35%;
    border-radius: 1.4rem;
    font-size: 3rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 3rem;
    font-size: 7.6rem;
  }
`;
