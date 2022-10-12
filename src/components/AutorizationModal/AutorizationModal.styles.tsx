import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: var(--errorMessage);
  font-size: 1.6rem;
  margin: 1rem 0 -1rem 0;
  text-align: center;

  @media ${breakpoints.fold} {
    font-size: 1.3rem;
    margin: 0.5rem 0 -1.5rem 0;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.2rem;
    margin: 0 0 -2rem 0;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.2rem;
    margin: -1.5rem 0 -3rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 5.4rem;
    margin: -3rem 0 -4.5rem 0;
  }
`;

export const ModalForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  width: 100%;
`;

export const ModalInput = styled.input`
  background-color: var(--light-gray);
  border: 0;
  border-radius: 1.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.2rem;
  font-weight: bold;
  height: 15%;
  letter-spacing: 0.6rem;
  margin-bottom: -2rem;
  outline: 0;
  padding: 0 1rem;
  text-align: center;
  width: 75%;

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
    letter-spacing: 0.7rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    border-radius: 2.4rem;
    font-size: 3.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
    letter-spacing: 0.8rem;
    width: 70%;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3.4rem;
    width: 70%;
  }

  @media ${breakpoints.sDesktop} {
    width: 65%;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 4rem;
    font-size: 8rem;
    letter-spacing: 1rem;
  }
`;

export const ModalLabel = styled.label`
  font-size: 2rem;
  font-weight: bold;
  margin-top: -1.5rem;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  width: 80%;

  @media ${breakpoints.fold} {
    font-size: 1.5rem;
    margin-bottom: -1rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.6rem;
    margin: -2.5rem 0;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
    margin: -5rem 0 -4rem 0;
  }
`;
