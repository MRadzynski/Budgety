import CustomButton from '../CustomButton/CustomButton';
import React, { useState } from 'react';
import {
  createEmailAndPasswordUser,
  createUserDocument,
  resetUserPassword,
  signInEmailAndPasswordUser,
  signInWithGoogle
} from '../../firebase/firebase.utils';
import {
  ErrorMessageContainer,
  ForgotPasswordLink,
  Form,
  FormInput,
  FormSubtext,
  FormTitle,
  LogoContainer,
  SignInUpContainer,
  SignInUpLink,
  SuccessMessageContainer
} from './SignInUp.styles';
import { useLocation } from 'react-router-dom';

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignInUp = ({ formType }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isMessage, setIsMessage] = useState('');
  const [userCredentials, setUserCredentails] = useState({
    confirmPassword: '',
    displayName: '',
    email: '',
    password: ''
  });

  const location = useLocation();

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentails({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
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

        if (!userCredentials.password.match(regex)) {
          setErrorMessage(`Password too weak!`);
          return;
        }

        const { user } = await createEmailAndPasswordUser(email, password);

        await createUserDocument(user, { displayName });
      } else if (formType === 'sign-in') {
        await signInEmailAndPasswordUser(email, password);
      } else {
        await resetUserPassword(email);
        setIsMessage('true');
      }
    } catch (error) {
      if (
        (error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password') &&
        formType === 'sign-in'
      ) {
        setErrorMessage('Wrong email or password!');
      } else if (error.code === 'auth/user-not-found' && formType === 'reset') {
        setErrorMessage('There is no account at this email address!');
      }
    }
  };

  return (
    <SignInUpContainer>
      <FormTitle>Budgety</FormTitle>
      <LogoContainer>
        <img alt="Budgety logo" src="/assets/logo.png" />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        {!location.pathname.includes('/reset-password') ? (
          <>
            {formType === 'sign-up' && (
              <FormInput
                name="displayName"
                onChange={handleChange}
                placeholder="Display name (optional)"
                type="text"
              />
            )}
            <FormInput
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
              type="email"
            />
            <FormInput
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
              type="password"
            />
            {formType === 'sign-in' && (
              <ForgotPasswordLink to="/reset-password">
                Forgot password?
              </ForgotPasswordLink>
            )}
            {formType === 'sign-up' && (
              <FormInput
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm password"
                required
                type="password"
              />
            )}
            <ErrorMessageContainer display={errorMessage}>
              {errorMessage}
            </ErrorMessageContainer>
            <CustomButton
              bgColor="var(--white-shade)"
              hoverColor="var(--secondary-color)"
              textColor="var(--black-shade)"
              type="submit"
            >
              {formType === 'sign-up' ? 'Sign Up' : 'Sign In'}
            </CustomButton>
            {formType === 'sign-in' && (
              <CustomButton
                bgColor="#4285f4"
                hoverColor="#357ae8"
                onClick={signInWithGoogle}
                textColor="var(--white-shade)"
                type="button"
              >
                Sign In with Google
              </CustomButton>
            )}
          </>
        ) : (
          <>
            <FormSubtext reset>
              Enter your email for instructions on resetting your password
            </FormSubtext>
            <FormInput
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
              resetInput
              type="email"
            />
            <SuccessMessageContainer display={isMessage}>
              The email with instructions has been sent!
            </SuccessMessageContainer>
            <ErrorMessageContainer display={errorMessage} reset>
              {errorMessage}
            </ErrorMessageContainer>
            <CustomButton
              bgColor="var(--white-shade)"
              hoverColor="var(--secondary-color)"
            >
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
