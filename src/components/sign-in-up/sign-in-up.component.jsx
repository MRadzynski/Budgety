import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {
  SignInUpContainer,
  Form,
  FormTitle,
  FormSubtext,
  LogoContainer,
  FormInput,
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
      <CustomButton>
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

export default SignInUp;
