import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInUpContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  place-items: center;
  color: var(--white-shade);
`;

export const Form = styled.form`
  height: calc(var(--vh, 1vh) * 47);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;

  button:nth-of-type(2) {
    margin-top: -1rem;
  }

  @media (min-width: 20rem) {
    margin-top: 2rem;

    button:nth-of-type(1) {
      margin-top: -0.5rem;
    }
  }

  @media (min-width: 23rem) {
    button:nth-of-type(1) {
      margin-top: 1rem;
    }
  }
`;

export const FormInput = styled.input`
  width: 70%;
  line-height: 3rem;
  background-color: var(--primary-color);
  color: var(--white-shade);
  border-width: 0 0 1px 0;
  border-color: white;
  outline: none;
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  margin: ${({ resetInput }) => (resetInput ? '2.5rem 0' : '0 0')};

  ::placeholder {
    color: #e6e6e6;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:active,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: var(--white-shade) !important;
    box-shadow: 0 0 0 1000px var(--primary-color) inset !important;
  }

  &[type='password'] {
    letter-spacing: 0.7rem;
  }

  &[type='text']::placeholder {
    letter-spacing: 0.15rem;
  }

  @media (min-width: 20rem) {
    line-height: 1.8rem;
    font-size: 1.6rem;
    margin: ${({ resetInput }) => (resetInput ? '0 0 1.5rem 0' : '0')};

    ::placeholder {
      font-size: 1.6rem;
    }

    &[type='email'] {
      letter-spacing: 0.25rem;
    }
  }

  @media (min-width: 22.5rem) {
    font-size: 1.8rem;
    margin: ${({ resetInput }) => (resetInput ? '0.5rem 0 1.5rem 0' : '0')};

    ::placeholder {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 23rem) {
    font-size: 2rem;
    margin: ${({ resetInput }) => (resetInput ? '-1rem 0 2rem 0' : '0')};
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;

    ::placeholder {
      font-size: 2rem;
    }
  }
`;

export const FormTitle = styled.h1`
  font-size: 4rem;
  margin: 2rem auto;
  letter-spacing: 0.25rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    margin: 2rem auto;
    font-size: 4rem;
    letter-spacing: 0.35rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 4.5rem;
    letter-spacing: 0.4rem;
  }

  @media (min-width: 22.5rem) and (min-height: 50rem) {
    font-size: 5rem;
    margin: 3rem auto 2rem auto;
  }

  @media (min-width: 25rem) {
    margin: 3rem auto 2rem auto;
    font-size: 5rem;
  }
`;

export const FormSubtext = styled.h2`
  width: 80%;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.15rem;
  margin-top: 0.5rem;
  font-size: ${({ reset }) => (reset ? '1.8rem' : null)};

  @media (min-width: 20rem) {
    font-size: ${({ reset }) => (reset ? '1.4rem' : '1.3rem')};
    margin: 0 0 2rem 0;
  }

  @media (min-width: 22.5rem) {
    margin-top: 0.75rem;
  }

  @media (min-width: 23rem) {
    font-size: ${({ reset }) => (reset ? '1.7rem' : '1.5rem')};
  }

  @media (min-width: 25rem) {
    font-size: ${({ reset }) => (reset ? '1.8rem' : '1.6rem')};
  }
`;

export const ForgotPasswordLink = styled(Link)`
  width: 70%;
  text-decoration: underline;
  text-align: right;
  font-size: 130%;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: -2rem 0 -1rem 0;
  color: #33cfff;

  @media (min-width: 20rem) {
    margin: -2rem 0 -0.5rem 0;
    font-size: 1.2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.3rem;
  }

  @media (min-width: 23rem) {
    font-size: 1.4rem;
    margin-bottom: -0.5rem;
  }

  @media (min-width: 22.5rem) and (min-height: 50rem) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 25rem) {
    margin-bottom: -0.25rem;
    font-size: 1.5rem;
  }
`;

export const ErrorMessageContainer = styled.div`
  width: 80%;
  display: ${({ display }) => (display !== '' ? 'inline-block' : 'none')};
  margin-top: ${({ reset }) => (reset ? '-4rem' : '-2rem')};
  margin-bottom: -1.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: var(--errorMessage);

  @media (min-width: 23rem) {
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-2.5rem')};
  }

  @media (min-width: 25rem) {
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-2.7rem')};
    font-size: 1.8rem;
  }
`;

export const SuccessMessageContainer = styled.div`
  width: 80%;
  display: ${({ display }) => (display !== '' ? 'inline-block' : 'none')};
  margin: -4rem 0 -1rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: #4bb543;

  @media (min-width: 25rem) {
    font-size: 1.8rem;
  }
`;

export const LogoContainer = styled.div`
  width: 30%;
  height: 25%;
  margin: 1.5rem auto 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SignInUpLink = styled(Link)`
  text-decoration: none;
  font-size: 110%;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-left: 1rem;
  color: #33cfff;
  border-bottom: 1px solid #33cfff;
`;
