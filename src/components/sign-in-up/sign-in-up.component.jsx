import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {
  SignInUpContainer,
  Form,
  FormTitle,
  FormSubtext,
  LogoContainer,
  FormInput,
  SignInUpLink,
} from './sign-in-up.styles';

import Logo from '../../assets/logo.png';

const SignInUp = ({ formType }) => (
  <SignInUpContainer>
    <FormTitle>Budgety</FormTitle>
    <LogoContainer>
      <img src={Logo} alt="Budgety logo" />
    </LogoContainer>
    <Form>
      <FormInput type="email" placeholder="Email" required />
      <FormInput type="password" placeholder="Password" required />
      {formType === 'sign-up' ? (
        <FormInput type="password" placeholder="Confirm password" required />
      ) : null}
      <CustomButton
        bgColor={'var(--white-shade)'}
        textColor={'var(--black-shade)'}
      >
        {formType === 'sign-up' ? 'Sign Up' : 'Sign In'}
      </CustomButton>
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

export default SignInUp;
