import styled from 'styled-components';

export const SignInFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--white-shade);
  display: flex;
  flex-direction: column;

  form {
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  input {
    width: 60%;
    line-height: 3rem;
    border-width: 0 0 1px 0;
    border-color: white;
    background-color: var(--primary-color);
    color: var(--white-shade);
    outline: none;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }

  input::placeholder {
    color: #e6e6e6;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }

  input[type='password'] {
    letter-spacing: 0.5rem;
  }

  h1 {
    font-size: 4.5rem;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 3rem;
  }

  h2 {
    font-weight: normal;
    text-align: center;
  }
`;
