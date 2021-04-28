import React, { useState } from 'react';

import {
  auth,
  signInWithGoogle,
  createUserDocument,
} from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';

import {
  SignInUpContainer,
  Form,
  FormTitle,
  FormSubtext,
  LogoContainer,
  FormInput,
  SignInUpLink,
  ErrorMessageContainer,
} from './sign-in-up.styles';

const SignInUp = ({ formType }) => {
  const [userCredentials, setUserCredentails] = useState({
    displayName: '',
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

    const { displayName, email, password } = userCredentials;
    setError('false');

    try {
      if (formType === 'sign-up') {
        if (userCredentials.password !== userCredentials.confirmPassword) {
          setError('true');
          return;
        }
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocument(user, { displayName });
      } else {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignInUpContainer>
      <FormTitle>Budgety</FormTitle>
      <LogoContainer>
        <img src="assets/logo.png" alt="Budgety logo" />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        {formType === 'sign-up' ? (
          <FormInput
            type="text"
            name="displayName"
            placeholder="Display name (optional)"
            onChange={handleChange}
          />
        ) : null}
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
          bgColor="var(--white-shade)"
          hoverColor="#4285f4"
          textColor="var(--black-shade)"
        >
          {formType === 'sign-up' ? 'Sign Up' : 'Sign In'}
        </CustomButton>
        {formType === 'sign-in' ? (
          <CustomButton
            type="button"
            bgColor="#4285f4"
            hoverColor="#357ae8"
            textColor="var(--white-shade)"
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </CustomButton>
        ) : null}
      </Form>
      {formType === 'sign-up' ? (
        <FormSubtext>
          Already have an account?
          <SignInUpLink to="/signin">Sign In!</SignInUpLink>
        </FormSubtext>
      ) : (
        <FormSubtext>
          Don't have an account?
          <SignInUpLink to="/signup">Sign Up!</SignInUpLink>
        </FormSubtext>
      )}
    </SignInUpContainer>
  );
};

export default SignInUp;
