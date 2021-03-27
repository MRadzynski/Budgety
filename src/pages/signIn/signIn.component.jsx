import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import { SignInFormContainer } from './signIn.styles';

const SignInForm = () => (
  <SignInFormContainer>
    <h1>Budgety</h1>
    <form>
      <input type="email" placeHolder="Email" required />
      <input type="password" placeHolder="Password" required />
      <CustomButton type="submit">Sign In</CustomButton>
    </form>
    <h2>Don't have an account? Sign Up!</h2>
  </SignInFormContainer>
);

export default SignInForm;
