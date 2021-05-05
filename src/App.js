import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { setFinances, setCurrency } from './redux/finance/finance.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Navbar from './components/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ExpensesIncomePage from './pages/expenses-income/expenses-income.component';
import ExchangePage from './pages/exchange/exchange.component';
import SettingsPage from './pages/settings/settings.component';
import HomePage from './pages/homepage/homepage.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import GlobalStyle from './GlobalStyles';

import {
  auth,
  createUserDocument,
  getUserFinancesRef,
} from './firebase/firebase.utils';

const App = ({ setCurrentUser, currentUser, setFinances, setCurrency }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        const financeRef = await getUserFinancesRef(userAuth.uid);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });

        financeRef.onSnapshot((snapshot) => {
          setFinances({
            expenses: snapshot.data().expenses,
            income: snapshot.data().income,
            savings: snapshot.data().savings,
          });

          setCurrency(snapshot.data().currency);
        });
      } else {
        setCurrentUser(null);
        setFinances({
          expenses: null,
          income: null,
          savings: null,
        });
        setCurrency(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser, setFinances, setCurrency]);

  return (
    <div>
      <GlobalStyle />
      {currentUser ? <Navbar /> : null}
      <ErrorBoundary>
        <Switch>
          <Route exact path="/expenses">
            <ExpensesIncomePage />
          </Route>
          <Route path="/expenses/add-expenses">
            <ExpensesIncomePage />
          </Route>
          <Route exact path="/income">
            <ExpensesIncomePage />
          </Route>
          <Route path="/income/add-income">
            <ExpensesIncomePage />
          </Route>
          <Route path="/exchange">
            <ExchangePage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
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
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setFinances: (finances) => dispatch(setFinances(finances)),
  setCurrency: (currency) => dispatch(setCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
