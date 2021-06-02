import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import {
  auth,
  signInWithGoogle,
  createUserDocument,
  resetUserPassword,
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
  ForgotPasswordLink,
  ErrorMessageContainer,
  SuccessMessageContainer,
} from './sign-in-up.styles';

const SignInUp = ({ formType }) => {
  const [userCredentials, setUserCredentails] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isMessage, setIsMessage] = useState('');
  const location = useLocation();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentails({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password } = userCredentials;
    setErrorMessage('');
    setIsMessage('');

    try {
      if (formType === 'sign-up') {
        if (userCredentials.password !== userCredentials.confirmPassword) {
          setErrorMessage(`Passwords don't match!`);
          return;
        }
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocument(user, { displayName });
      } else if (formType === 'sign-in') {
        await auth.signInWithEmailAndPassword(email, password);
      } else {
        await resetUserPassword(email);
        setIsMessage('true');
      }
    } catch (error) {
      console.log(error.code);

      if (
        (error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password') &&
        formType === 'sign-in'
      ) {
        setErrorMessage('Wrong e-mail or password!');
      } else if (error.code === 'auth/user-not-found' && formType === 'reset') {
        setErrorMessage('There is no account at this e-mail address!');
      }
    }
  };

  return (
    <SignInUpContainer>
      <FormTitle>Budgety</FormTitle>
      <LogoContainer>
        <img src="assets/logo.png" alt="Budgety logo" />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        {!location.pathname.includes('/reset-password') ? (
          <>
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
            {formType === 'sign-in' ? (
              <ForgotPasswordLink to="/reset-password">
                Forgot password?
              </ForgotPasswordLink>
            ) : null}
            {formType === 'sign-up' ? (
              <FormInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
                required
              />
            ) : null}
            <ErrorMessageContainer display={errorMessage}>
              {errorMessage}
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
          </>
        ) : (
          <>
            <FormSubtext reset>
              Enter your email for instructions on resetting your password
            </FormSubtext>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              resetInput
              required
            />
            <SuccessMessageContainer display={isMessage}>
              The email with instructions has been sent!
            </SuccessMessageContainer>
            <ErrorMessageContainer display={errorMessage} reset>
              {errorMessage}
            </ErrorMessageContainer>
            <CustomButton bgColor="var(--white-shade)" hoverColor="#33cfff">
              Reset Password
            </CustomButton>
          </>
        )}
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
