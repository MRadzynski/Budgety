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

  @media (min-width: 48rem) {
    width: 80%;
    margin-top: 3rem;

    button:nth-of-type(1) {
      margin-top: 4rem;
    }
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    margin-top: 5rem;

    button:nth-of-type(2) {
      margin-top: 0;
    }
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    height: calc(var(--vh, 1vh) * 52);
    margin-top: 3rem;

    button:nth-of-type(1) {
      margin-top: 1.5rem;
    }

    button:nth-of-type(2) {
      margin-top: -1rem;
    }
  }

  @media (min-width: 80rem) {
    height: calc(var(--vh, 1vh) * 45);
    margin-top: 2rem;
  }

  @media (min-width: 85rem) {
    gap: 2.5rem;
  }

  @media (min-width: 90rem) {
    gap: 3rem;

    button:nth-of-type(1) {
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 120rem) {
    margin-top: 0;

    button:nth-of-type(1) {
      margin-top: 3rem;
    }
  }

  @media (min-width: 160rem) {
    margin-top: 3rem;
  }

  @media (min-width: 240rem) {
    gap: 5rem;

    button:nth-of-type(1) {
      margin-top: 7rem;
    }
  }
`;

export const FormInput = styled.input`
  width: 70%;
  line-height: 3rem;
  background-color: var(--primary-color);
  background-color: transparent;
  color: var(--white-shade);
  border-width: 0 0 1px 0;
  border-color: white;
  outline: none;
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  caret-color: white;
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
    /* box-shadow: 0 0 0 30px var(--primary-color) inset !important; */
    -webkit-text-fill-color: var(--white-shade) !important;
    background-clip: content-box !important;
    transition: background-color 5000s;
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

  @media (min-width: 48rem) {
    font-size: 3rem;
    line-height: 4rem;
    margin: ${({ resetInput }) => (resetInput ? '0 0 2rem 0' : '0')};

    ::placeholder {
      font-size: 3rem;
    }
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 50%;

    &[type='password'] {
      letter-spacing: 1.2rem;
    }
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    width: 40%;
    font-size: 2.4rem;
    letter-spacing: 0.4rem;
    line-height: 3rem;

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

  @media (min-width: 85rem) and (orientation: landscape) {
    width: 35%;
  }

  @media (min-width: 90rem) {
    font-size: 2.6rem;

    ::placeholder {
      font-size: 2.6rem;
    }
  }

  @media (min-width: 120rem) {
    width: 30%;
    font-size: 3rem;
    line-height: 4rem;

    ::placeholder {
      font-size: 3rem;
    }
  }

  @media (min-width: 160rem) {
    width: 25%;
    font-size: 2.8rem;

    ::placeholder {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
    line-height: 10rem;

    ::placeholder {
      font-size: 6rem;
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

  @media (min-width: 48rem) {
    font-size: 7rem;
    margin: 3.5rem 0 3rem 0;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 9rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 10rem;
    letter-spacing: 1.5rem;
    margin-top: 1.5rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 7rem;
  }

  @media (min-width: 90rem) {
    font-size: 8rem;
  }

  @media (min-width: 120rem) {
    margin-top: 2rem;
    font-size: 10rem;
  }

  @media (min-width: 160rem) {
    font-size: 10.5rem;
  }

  @media (min-width: 240rem) {
    margin: 10rem 0;
    font-size: 20rem;
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

  @media (min-width: 48rem) {
    margin-top: 1rem;
    font-size: ${({ reset }) => (reset ? '2.6rem' : '2.2rem')};
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    margin-top: 1rem;
    font-size: ${({ reset }) => (reset ? '3.2rem' : '2.8rem')};
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-top: 4rem;
    padding-bottom: ${({ reset }) => (reset ? '0' : '4rem')};
    font-size: ${({ reset }) => (reset ? '3.2rem' : '2.8rem')};
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    margin-top: 1.5rem;
    padding-bottom: 0;
    font-size: ${({ reset }) => (reset ? '2.4rem' : '2rem')};
    width: ${({ reset }) => (reset ? '40%' : '80%')};
  }

  @media (min-width: 90rem) {
    margin-top: 1rem;
    font-size: ${({ reset }) => (reset ? '2.6rem' : '2.2rem')};
  }

  @media (min-width: 120rem) {
    font-size: ${({ reset }) => (reset ? '3rem' : '2.6rem')};
  }

  @media (min-width: 160rem) {
    width: ${({ reset }) => (reset ? '30%' : '80%')};
    font-size: ${({ reset }) => (reset ? '2.8rem' : '2.4rem')};
    margin-top: 0rem;
  }

  @media (min-width: 240rem) {
    font-size: ${({ reset }) => (reset ? '5rem' : '4rem')};
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

  @media (min-width: 48rem) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    margin-bottom: -0.5rem;
    font-size: 2.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 50%;
    font-size: 2.4rem;
    margin-bottom: -0.5rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    width: 40%;
    font-size: 1.8rem;
  }

  @media (min-width: 85rem) {
    width: 35%;
  }

  @media (min-width: 90rem) {
    margin-bottom: 0;
    font-size: 2.2rem;
  }

  @media (min-width: 120rem) {
    width: 30%;
    font-size: 2.4rem;
  }

  @media (min-width: 160rem) {
    width: 25%;
  }

  @media (min-width: 240rem) {
    font-size: 4.5rem;
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

  @media (min-width: 48rem) {
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-3.7rem')};
    font-size: 2.4rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    margin-bottom: ${({ reset }) => (reset ? '-3rem' : '-3.7rem')};
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-bottom: ${({ reset }) => (reset ? '-2.5rem' : '-3.5rem')};
    font-size: 2.6rem;
    width: 90%;
  }

  @media (min-width: 80rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 90rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.5rem;
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

  @media (min-width: 48rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3rem;
    margin-bottom: -3rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-bottom: -2.5rem;
    font-size: 2.6rem;
    width: 90%;
  }

  @media (min-width: 80rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 90rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
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

  @media (min-width: 48rem) {
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-3.7rem')};
    height: 30%;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    height: 25%;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '2rem')};
    height: 30%;
    width: 20%;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    height: 22%;
    width: 12%;
  }

  @media (min-width: 120rem) {
    height: 25%;
    width: 10%;
  }

  @media (min-width: 160rem) {
    height: 22%;
    width: 7%;
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
