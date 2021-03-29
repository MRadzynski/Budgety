import React from 'react';

import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
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
