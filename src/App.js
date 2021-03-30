import React from 'react';

import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ExpensesPage from './pages/expenses/expenses.component';

import GlobalStyle from './GlobalStyles';

const App = () => (
  <div>
    <GlobalStyle />
    {/* <SignUp /> */}
    <ExpensesPage />
  </div>
);

export default App;
