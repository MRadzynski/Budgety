import React from 'react';

import SignInForm from './pages/signIn/signIn.component';
import HomePage from './pages/homepage/homepage.component';
import ExpensesPage from './pages/expenses/expenses.component';
import CustomButton from './components/custom-button/custom-button.component';

import GlobalStyle from './GlobalStyles';

const App = () => (
  <div>
    <GlobalStyle />
    {/* <CustomButton>Add Expense</CustomButton> */}
    {/* <ExpensesPage /> */}
    <SignInForm />
  </div>
);

export default App;
