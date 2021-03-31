import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ExpensesPage from './pages/expenses/expenses.component';

import GlobalStyle from './GlobalStyles';

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route path="/expenses">
        <ExpensesPage />
      </Route>
      <Route path="/savings">
        <ExpensesPage />
      </Route>
      <Route path="/settings"></Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/"></Route>
    </Switch>
  </div>
);

export default App;
