import React, { useEffect, useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ExpensesPage from './pages/expenses/expenses.component';

import GlobalStyle from './GlobalStyles';
import { auth } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
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
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/expenses" /> : <SignIn />
          }
        ></Route>
        <Route
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/expenses" /> : <SignUp />
          }
        ></Route>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
};

export default App;
