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
  width: 100%;
  height: calc(var(--vh, 1vh) * 47);
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

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    height: calc(var(--vh, 1vh) * 52);
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    height: calc(var(--vh, 1vh) * 52);
    margin-top: 1rem;

    button:nth-of-type(1) {
      margin-top: 1.5rem;
    }

    button:nth-of-type(2) {
      margin-top: -1rem;
    }
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape){
    height: calc(var(--vh, 1vh) * 45);
    margin-top: 2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px){
    gap: 3rem;
  }

  @media (min-width: 90rem) and (min-height: 900px){
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
  margin: ${({ resetInput }) => (resetInput ? '2.5rem 0' : '0 0')};
  border-width: 0 0 1px 0;
  border-color: white;
  outline: none;
  background-color: transparent;
  color: var(--white-shade);
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: 0.2rem;
  caret-color: white;

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
    margin: ${({ resetInput }) => (resetInput ? '0 0 1.5rem 0' : '0')};
    font-size: 1.6rem;
    line-height: 1.8rem;

    ::placeholder {
      font-size: 1.6rem;
    }

    &[type='email'] {
      letter-spacing: 0.25rem;
    }
  }

  @media (min-width: 22.5rem) {
    margin: ${({ resetInput }) => (resetInput ? '0.5rem 0 1.5rem 0' : '0')};
    font-size: 1.8rem;

    ::placeholder {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 23rem) {
    margin: ${({ resetInput }) => (resetInput ? '-1rem 0 2rem 0' : '0')};
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;

    ::placeholder {
      font-size: 2rem;
    }
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    margin: ${({ resetInput }) => (resetInput ? '0 0 2rem 0' : '0')};
    font-size: 3rem;
    line-height: 4rem;

    ::placeholder {
      font-size: 3rem;
    }
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
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

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 40%;

    &[type='password'] {
      letter-spacing: 1.2rem;
    }
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape) {
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

  @media (min-width: 85rem) and (min-height: 900px) {
    width: 40%;
    font-size: 3.2rem;

    ::placeholder {
      font-size: 3.2rem;
    }
  }

  @media (min-width: 90rem) and (min-height: 900px) {
    font-size: 3.4rem;

    ::placeholder {
      font-size: 3.4rem;
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

  @media (min-width: 120rem) and (max-height: 848px) {
    width: 40%;
    font-size: 2.8rem;
    line-height: 3.6rem;

    ::placeholder {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 160rem) {
    width: 25%;
    font-size: 2.8rem;

    ::placeholder {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    width: 30%;
    font-size: 4.6rem;
    line-height: 7rem;

    ::placeholder {
      font-size: 4.6rem;
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
  margin: 2rem auto;
  font-size: 4rem;
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
    margin: 3rem auto 2rem auto;
    font-size: 5rem;
  }

  @media (min-width: 25rem) {
    margin: 3rem auto 2rem auto;
    font-size: 5rem;
  }

  @media (min-width: 48rem) {
    margin: 3.5rem 0 3rem 0;
    font-size: 7rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 9rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 12rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-top: 1rem;
    font-size: 7rem;
    letter-spacing: 1.5rem;
  }

  @media (min-width: 85rem) and (min-height: 900px){
    margin-top: 2rem;
    font-size: 9rem;
  }

  @media (min-width: 90rem) and (min-height: 900px){
    margin-top: 1.5rem;
    font-size: 8rem;
  }

  @media (min-width: 120rem) {
    margin-top: 2rem;
    font-size: 10rem;
  }

  @media (min-width: 120rem) and (max-height: 848px) {
    font-size: 9rem;
  }

  @media (min-width: 160rem) {
    font-size: 10.5rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    margin-top: 8rem 0;
    font-size: 14rem;
  }

  @media (min-width: 240rem) {
    margin: 10rem 0;
    font-size: 20rem;
  }
`;

export const FormSubtext = styled.h2`
  width: 80%;
  margin-top: 0.5rem;
  font-size: ${({ reset }) => (reset ? '1.8rem' : null)};
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.15rem;

  @media (min-width: 20rem) {
    margin: 0 0 2rem 0;
    font-size: ${({ reset }) => (reset ? '1.4rem' : '1.3rem')};
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

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    margin-bottom: 5rem;
    font-size: ${({ reset }) => (reset ? '4rem' : '3.6rem')};
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: ${({ reset }) => (reset ? '60%' : '80%')};
    margin-top: 1rem;
    padding-bottom: ${({ reset }) => (reset ? '0' : '4rem')};
    font-size: ${({ reset }) => (reset ? '2.6rem' : '2.4rem')};
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape) {
    width: ${({ reset }) => (reset ? '40%' : '80%')};
    margin-top: 1.5rem;
    padding-bottom: 0;
    font-size: ${({ reset }) => (reset ? '2.4rem' : '2rem')};
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: ${({ reset }) => (reset ? '3rem' : '2.6rem')};
  }

  @media (min-width: 90rem) and (min-height: 900px){
    margin-top: 1rem;
  }

  @media (min-width: 120rem) {
    font-size: ${({ reset }) => (reset ? '3rem' : '2.6rem')};
  }

  @media (min-width: 160rem) {
    width: ${({ reset }) => (reset ? '30%' : '80%')};
    margin-top: 0rem;
    font-size: ${({ reset }) => (reset ? '2.8rem' : '2.4rem')};
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: ${({ reset }) => (reset ? '4rem' : '3.6rem')};
  }

  @media (min-width: 240rem) {
    font-size: ${({ reset }) => (reset ? '6rem' : '5rem')};
  }
`;

export const ForgotPasswordLink = styled(Link)`
  width: 70%;
  margin: -2rem 0 -1rem 0;
  color: var(--secondary-color);
  font-size: 130%;
  font-weight: bold;
  text-align: right;
  text-decoration: underline;
  letter-spacing: 0.2rem;

  @media (min-width: 20rem) {
    margin: -2rem 0 -0.5rem 0;
    font-size: 1.2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.3rem;
  }

  @media (min-width: 23rem) {
    margin-bottom: -0.5rem;
    font-size: 1.4rem;
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

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 3.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 40%;
    margin-bottom: -0.5rem;
    font-size: 2.4rem;
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape) {
    width: 40%;
    font-size: 1.8rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) and (orientation: landscape) {
    font-size: 2.4rem;
  }

  @media (min-width: 90rem) and (min-height: 900px){
    margin-bottom: 0;
    font-size: 2.2rem;
  }

  @media (min-width: 120rem) {
    width: 30%;
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) and (max-height: 848px) {
    width: 40%;
  }

  @media (min-width: 160rem) {
    width: 25%;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    width:30%;
    font-size: 3.6rem;
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
  color: var(--errorMessage);
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;

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
    font-size: 2.6rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 3.6rem
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 90%;
    margin-bottom: ${({ reset }) => (reset ? '-2.5rem' : '-3.5rem')};
    font-size: 2.4rem;
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px){
    font-size: 2.6rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.5rem;
  }
`;

export const SuccessMessageContainer = styled.div`
  width: 80%;
  display: ${({ display }) => (display !== '' ? 'inline-block' : 'none')};
  margin: -4rem 0 -1rem 0;
  color: var(--successMessage);
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 25rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 48rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    margin-bottom: -3rem;
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    font-size: 3.6rem
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 90%;
    margin-bottom: -2.5rem;
    font-size: 2.4rem;
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape){
    font-size: 2.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px){
    font-size: 2.6rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.5rem;
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
    height: 30%;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '-3.7rem')};
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    height: 25%;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 15%;
    height: 22%;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '1rem')};
  }

  @media (min-width: 80rem) and (min-height: 900px) and (orientation: landscape){
    width: 12%;
  }

  @media (min-width: 85rem) and (min-height: 900px){
    width: 15%;
    height: 25%;
    margin-bottom: ${({ reset }) => (reset ? '-1rem' : '0rem')};
  }

  @media (min-width: 120rem) {
    width: 10%;
    height: 25%;
  }

  @media (min-width: 120rem) and (max-height: 848px) {
    height: 23%;
  }

  @media (min-width: 160rem) {
    width: 7%;
    height: 22%;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    width: 10%;
    height: 25%;
  }
`;

export const SignInUpLink = styled(Link)`
  margin-left: 1rem;
  border-bottom: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  font-size: 110%;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.2rem;
`;
