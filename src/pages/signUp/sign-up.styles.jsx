import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: var(--white-shade);
`;

export const SignUpForm = styled.form`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const SignUpTitle = styled.h1`
  font-size: 4.5rem;
  margin-top: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const FormInput = styled.input`
  width: 60%;
  line-height: 3rem;
  background-color: var(--primary-color);
  color: var(--white-shade);
  border-width: 0 0 1px 0;
  border-color: white;
  outline: none;
  font-size: 2rem;
  letter-spacing: 0.2rem;

  ::placeholder {
    color: #e6e6e6;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }

  [type='password'] {
    letter-spacing: 0.5rem;
  }
`;

export const SignUpSubtext = styled.h2`
  font-weight: normal;
  text-align: center;
`;
