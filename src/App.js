import React from 'react';

import SignIn from './pages/signIn/signIn.component';
import SignUp from './pages/signUp/sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ExpensesPage from './pages/expenses/expenses.component';
import CustomButton from './components/custom-button/custom-button.component';

import GlobalStyle from './GlobalStyles';

const App = () => (
  <div>
    <GlobalStyle />
    {/* <CustomButton>Add Expense</CustomButton> */}
    {/* <ExpensesPage /> */}
    <SignUp />
  </div>
);

export default App;
