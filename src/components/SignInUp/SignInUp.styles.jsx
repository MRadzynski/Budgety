import { Link } from 'react-router-dom';
import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const ErrorMessageContainer = styled.div`
  color: var(--errorMessage);
  display: ${({ display }) => (display !== '' ? 'inline-block' : 'none')};
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: -1.5rem;
  margin-top: ${({ reset }) => (reset ? '-4rem' : '-2rem')};
  text-align: center;
  width: 80%;

  @media ${breakpoints.fold} {
    margin-bottom: ${({ reset }) => (reset ? '-2rem' : '-1rem')};
    margin-top: ${({ reset }) => (reset ? '-3rem' : '-1rem')};
  }

  @media ${breakpoints.phone} {
    margin-bottom: ${({ reset }) => (reset ? '-2.5rem' : '-2.5rem')};
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.8rem;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-2.7rem')};
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-3.7rem')};
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.4rem;
    margin-bottom: ${({ reset }) => (reset ? '-2.5rem' : '-3.5rem')};
    width: 90%;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 4.5rem;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  color: var(--secondary-color);
  font-size: 130%;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: -2rem 0 -1rem 0;
  text-align: right;
  text-decoration: underline;
  width: 70%;
  -webkit-tap-highlight-color: transparent;

  @media ${breakpoints.xsPhone} {
    font-size: 1.2rem;
    margin: -2rem 0 -0.5rem 0;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.3rem;
  }

  @media ${breakpoints.phone} {
    font-size: 1.4rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.5rem;
    margin-bottom: -0.25rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2rem;
    margin-bottom: -0.5rem;
    width: 35%;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 1.8rem;
    width: 30%;
  }

  @media ${breakpoints.laptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 2.2rem;
    margin-bottom: 0;
    width: 30%;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.4rem;
    width: 25%;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 20%;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.6rem;
    width: 25%;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 4.5rem;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: calc(var(--vh, 1vh) * 47);
  justify-content: center;
  margin-top: 2rem;
  width: 100%;

  button:nth-of-type(2) {
    margin-top: -1rem;
  }

  @media ${breakpoints.fold} {
    gap: 2rem;

    button:nth-of-type(1) {
      margin-top: 1rem;
    }
  }

  @media ${breakpoints.xsPhone} {
    gap: 2rem;
    margin-top: 2rem;

    button:nth-of-type(1) {
      margin-top: 1rem;
    }
  }

  @media ${breakpoints.phone} {
    gap: 2rem;

    button:nth-of-type(1) {
      margin-top: 1rem;
    }
  }

  @media ${breakpoints.lPhone} {
    gap: 2.5rem;

    button:nth-of-type(1) {
      margin-top: 1rem;
    }
  }

  @media ${breakpoints.tablet} {
    gap: 3rem;
    margin-top: 3rem;
    width: 80%;

    button:nth-of-type(1) {
      margin-top: 4rem;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    height: calc(var(--vh, 1vh) * 52);
  }

  @media ${breakpoints.xsLaptop} {
    height: calc(var(--vh, 1vh) * 52);
    margin-top: 1rem;

    button:nth-of-type(1) {
      margin-top: 1.5rem;
    }

    button:nth-of-type(2) {
      margin-top: -1rem;
    }
  }

  @media ${breakpoints.sLaptop} {
    height: calc(var(--vh, 1vh) * 45);
    margin-top: 2rem;
  }

  @media ${breakpoints.laptop} {
    gap: 2.5rem;
  }

  @media ${breakpoints.lLaptop} {
    button:nth-of-type(1) {
      margin-top: 2.5rem;
    }
  }

  @media ${breakpoints.desktopFHD} {
    gap: 3rem;
    margin-top: 0;

    button:nth-of-type(1) {
      margin-top: 3rem;
    }
  }

  @media ${breakpoints.desktopUltrawide} {
    margin-top: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 5rem;

    button:nth-of-type(1) {
      margin-top: 7rem;
    }
  }
`;

export const FormInput = styled.input`
  background-color: transparent;
  border-color: white;
  border-width: 0 0 1px 0;
  caret-color: white;
  color: var(--white-shade);
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  line-height: 3rem;
  margin: ${({ resetInput }) => (resetInput ? '2.5rem 0' : '0 0')};
  outline: none;
  width: 70%;

  ::placeholder {
    color: #e6e6e6;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
  }

  :-webkit-autofill,
  :-webkit-autofill:active,
  :-webkit-autofill:focus,
  :-webkit-autofill:hover {
    background-clip: content-box !important;
    transition: background-color 5000s;
    -webkit-text-fill-color: var(--white-shade) !important;
  }

  &[type='password'] {
    letter-spacing: 0.7rem;
  }

  &[type='text']::placeholder {
    letter-spacing: 0.15rem;
  }

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin: ${({ resetInput }) => (resetInput ? '0 0 1.5rem 0' : '0')};

    ::placeholder {
      font-size: 1.5rem;
    }
    &[type='email'] {
      letter-spacing: 0.25rem;
    }
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin: ${({ resetInput }) => (resetInput ? '0 0 1.5rem 0' : '0')};

    ::placeholder {
      font-size: 1.6rem;
    }

    &[type='email'] {
      letter-spacing: 0.25rem;
    }
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.8rem;
    margin: ${({ resetInput }) => (resetInput ? '0.5rem 0 1.5rem 0' : '0')};

    ::placeholder {
      font-size: 1.8rem;
    }
  }

  @media ${breakpoints.phone} {
    font-size: 2rem;
    margin: ${({ resetInput }) => (resetInput ? '-1rem 0 2rem 0' : '0')};
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;

    ::placeholder {
      font-size: 2rem;
    }
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
    line-height: 4rem;
    margin: ${({ resetInput }) => (resetInput ? '0 0 2rem 0' : '0')};

    ::placeholder {
      font-size: 3rem;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.6rem;
    line-height: 6rem;

    ::placeholder {
      font-size: 4.6rem;
    }

    &[type='email'] {
      letter-spacing: 0.7rem;
    }

    &[type='password'] {
      letter-spacing: 1.5rem;
    }
  }

  @media ${breakpoints.xsLaptop} {
    width: 35%;

    &[type='password'] {
      letter-spacing: 1.2rem;
    }
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.4rem;
    letter-spacing: 0.4rem;
    line-height: 3rem;
    width: 30%;

    ::placeholder {
      font-size: 2.4rem;
      font-weight: normal;
    }

    &[type='email'] {
      letter-spacing: 0.3rem;
    }

    &[type='password'] {
      font-weight: bold;
      letter-spacing: 1.5rem;
    }
  }

  @media ${breakpoints.laptop} {
    font-size: 2.8rem;

    ::placeholder {
      font-size: 2.8rem;
    }
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3rem;
    width: 30%;

    ::placeholder {
      font-size: 3rem;
    }
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
    line-height: 3.6rem;
    width: 25%;

    ::placeholder {
      font-size: 2.8rem;
    }
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 2.8rem;
    width: 20%;

    ::placeholder {
      font-size: 2.8rem;
    }
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.6rem;
    line-height: 7rem;
    width: 25%;

    ::placeholder {
      font-size: 4.6rem;
    }
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
    line-height: 10rem;

    ::placeholder {
      font-size: 6rem;
    }
  }
`;

export const FormSubtext = styled.h2`
  font-size: ${({ reset }) => (reset ? '1.8rem' : null)};
  font-weight: normal;
  letter-spacing: 0.15rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 80%;

  @media ${breakpoints.fold} {
    font-size: ${({ reset }) => (reset ? '1.6rem' : '1.5rem')};
  }

  @media ${breakpoints.xsPhone} {
    font-size: ${({ reset }) => (reset ? '1.4rem' : '1.3rem')};
    margin: 0 0 2rem 0;
  }

  @media ${breakpoints.sPhone} {
    margin-top: 0.75rem;
  }

  @media ${breakpoints.phone} {
    font-size: ${({ reset }) => (reset ? '1.7rem' : '1.5rem')};
  }

  @media ${breakpoints.lPhone} {
    font-size: ${({ reset }) => (reset ? '1.8rem' : '1.6rem')};
  }

  @media ${breakpoints.tablet} {
    font-size: ${({ reset }) => (reset ? '2.6rem' : '2.2rem')};
    margin-top: 1rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: ${({ reset }) => (reset ? '4rem' : '3.6rem')};
    margin-bottom: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: ${({ reset }) => (reset ? '2.6rem' : '2.4rem')};
    margin-top: 1rem;
    padding-bottom: ${({ reset }) => (reset ? '0' : '4rem')};
    width: ${({ reset }) => (reset ? '50%' : '80%')};
  }

  @media ${breakpoints.sLaptop} {
    font-size: ${({ reset }) => (reset ? '2.4rem' : '2rem')};
    margin-top: 1.5rem;
    padding-bottom: 0;
    width: ${({ reset }) => (reset ? '40%' : '80%')};
  }

  @media ${breakpoints.laptop} {
    font-size: ${({ reset }) => (reset ? '3rem' : '2.4rem')};
  }

  @media ${breakpoints.lLaptop} {
    margin-top: 1rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: ${({ reset }) => (reset ? '3rem' : '2.6rem')};
    width: ${({ reset }) => (reset ? '30%' : '80%')};
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: ${({ reset }) => (reset ? '2.8rem' : '2.4rem')};
    margin-top: 0rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: ${({ reset }) => (reset ? '4rem' : '3.6rem')};
  }

  @media ${breakpoints.desktop4K} {
    font-size: ${({ reset }) => (reset ? '6rem' : '5rem')};
  }
`;

export const FormTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.25rem;
  margin: 2rem auto;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.xsPhone} {
    font-size: 4rem;
    letter-spacing: 0.35rem;
    margin: 2rem auto;
  }

  @media ${breakpoints.sPhone} {
    font-size: 4.5rem;
    letter-spacing: 0.4rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 5rem;
    margin: 3rem auto 2rem auto;
  }

  @media ${breakpoints.tablet} {
    font-size: 7rem;
    margin: 3.5rem 0 3rem 0;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 12rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 7rem;
    letter-spacing: 1.5rem;
    margin-top: 1rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 8rem;
    margin-top: 2rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 8rem;
    margin-top: 1.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 9rem;
    margin-top: 2rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 10.5rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 14rem;
    margin-top: 8rem 0;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 20rem;
    margin: 10rem 0;
  }
`;

export const LogoContainer = styled.div`
  height: 25%;
  margin: 1.5rem auto 0 auto;
  width: 30%;

  img {
    height: 100%;
    width: 100%;
  }

  @media ${breakpoints.fold} {
    height: 20%;
  }

  @media ${breakpoints.xsPhone} {
    height: 25%;
  }

  @media ${breakpoints.tablet} {
    height: 30%;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-3.7rem')};
  }

  @media ${breakpoints.xsLaptop} {
    height: 22%;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '1rem')};
    width: 15%;
  }

  @media ${breakpoints.sLaptop} {
    width: 12%;
  }

  @media ${breakpoints.laptop} {
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '0rem')};
    width: 15%;
  }

  @media ${breakpoints.desktopFHD} {
    height: 23%;
    width: 10%;
  }

  @media ${breakpoints.desktopUltrawide} {
    height: 22%;
    width: 7%;
  }

  @media ${breakpoints.desktop2K} {
    height: 25%;
    width: 10%;
  }
`;

export const SignInUpContainer = styled.div`
  color: var(--white-shade);
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  place-items: center;
  width: 100vw;
`;

export const SignInUpLink = styled(Link)`
  border-bottom: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  font-size: 110%;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-left: 1rem;
  text-decoration: none;
`;

export const SuccessMessageContainer = styled.div`
  color: var(--successMessage);
  display: ${({ display }) => (display !== '' ? 'inline-block' : 'none')};
  font-size: 1.6rem;
  font-weight: bold;
  margin: -4rem 0 -1rem 0;
  text-align: center;
  width: 80%;

  @media ${breakpoints.lPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.4rem;
    margin-bottom: -2.5rem;
    width: 90%;
  }

  @media ${breakpoints.sLaptop} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.laptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 4.5rem;
  }
`;
