import styled from 'styled-components';

export const SignInUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  color: var(--white-shade);
`;

export const Form = styled.form`
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
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
`;

export const FormTitle = styled.h1`
  font-size: 5rem;
  margin: 3rem auto 2rem auto;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FormSubtext = styled.h2`
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.15rem;
`;

export const ErrorMessageContainer = styled.div`
  width: 60%;
  visibility: ${({ display }) => (display === 'true' ? 'visible' : 'hidden')};
  margin-top: -2rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: var(--errorMessage);
`;

export const LogoContainer = styled.div`
  width: 35%;
  height: 30%;
  margin: 1.5rem auto 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
