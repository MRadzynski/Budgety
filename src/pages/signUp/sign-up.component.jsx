import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import {
  SignUpContainer,
  SignUpForm,
  SignUpTitle,
  FormInput,
  SignUpSubtext,
} from './sign-up.styles';

const SignUp = () => (
  <SignUpContainer>
    <SignUpTitle>Budgety</SignUpTitle>
    <SignUpForm>
      <FormInput type="email" placeholder="Email" required></FormInput>
      <FormInput type="password" placeholder="Password" required></FormInput>
      <FormInput
        type="password"
        placeholder="Confirm password"
        required
      ></FormInput>
      <CustomButton>Sign Up</CustomButton>
    </SignUpForm>
    <SignUpSubtext>Already have an account? Sign In!</SignUpSubtext>
  </SignUpContainer>
);

export default SignUp;
