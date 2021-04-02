import React, { useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';

import {
  SignInUpContainer,
  Form,
  FormTitle,
  FormSubtext,
  LogoContainer,
  FormInput,
  ErrorMessageContainer,
} from './sign-in-up.styles';

import Logo from '../../assets/logo.png';

const SignInUp = ({ formType }) => {
  const [userCredentials, setUserCredentails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('false');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentails({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = userCredentials;
    setError('false');

    if (formType === 'sign-up') {
      if (userCredentials.password !== userCredentials.confirmPassword) {
        setError('true');
        return;
      }

      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userData) => {
          console.log(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userData) => {
          console.log(userData);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <SignInUpContainer>
      <FormTitle>Budgety</FormTitle>
      <LogoContainer>
        <img src={Logo} alt="Budgety logo" />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {formType === 'sign-up' ? (
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={handleChange}
            required
          />
        ) : null}
        <ErrorMessageContainer display={error}>
          Passwords don't match!
        </ErrorMessageContainer>

        <CustomButton
          type="submit"
          bgColor={'var(--white-shade)'}
          textColor={'var(--black-shade)'}
        >
          {formType === 'sign-up' ? 'Sign Up' : 'Sign In'}
        </CustomButton>
      </Form>
      <FormSubtext>
        {formType === 'sign-up'
          ? `Already have an account? Sign In!`
          : `Don't have an account? Sign Up!`}
      </FormSubtext>
    </SignInUpContainer>
  );
};

export default SignInUp;
