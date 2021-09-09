import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { setFinances, setCurrency } from './redux/finance/finance.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Navbar from './components/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ResetPassword from './components/reset-password/reset-password.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import NotFound from './components/notFound/notFound.component';
import Spinner from './components/spinner/spinner.component';

import {
  auth,
  createUserDocument,
  getUserFinancesRef,
} from './firebase/firebase.utils';

import GlobalStyle from './GlobalStyles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

const ExchangePage = lazy(() => import('./pages/exchange/exchange.component'));

const ExpensesIncomePage = lazy(() =>
  import('./pages/expenses-income/expenses-income.component')
);

const HistoryPage = lazy(() => import('./pages/history/history.component'));

const SettingsPage = lazy(() => import('./pages/settings/settings.component'));

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
            expenses: snapshot.data()?.expenses,
            income: snapshot.data()?.income,
            expensesLogs: snapshot.data()?.expensesLogs,
            incomeLogs: snapshot.data()?.incomeLogs,
          });

          setCurrency(snapshot.data()?.currency);
        });
      } else {
        setCurrentUser(null);
        setFinances({
          expenses: null,
          income: null,
          expensesLogs: null,
          incomeLogs: null,
        });
        setCurrency(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser, setFinances, setCurrency]);

  return (
    <>
      <GlobalStyle />
      {currentUser ? <Navbar /> : null}
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              exact
              path="/expenses"
              render={() =>
                currentUser ? <ExpensesIncomePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/expenses/add-expenses"
              render={() =>
                currentUser ? <ExpensesIncomePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              exact
              path="/income"
              render={() =>
                currentUser ? <ExpensesIncomePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/income/add-income"
              render={() =>
                currentUser ? <ExpensesIncomePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/exchange"
              render={() =>
                currentUser ? <ExchangePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/history"
              render={() =>
                currentUser ? <HistoryPage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/settings"
              render={() =>
                currentUser ? <SettingsPage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
            />

            <Route
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
            />

            <Route
              path="/reset-password"
              render={() =>
                currentUser ? <Redirect to="/" /> : <ResetPassword />
              }
            />

            <Route
              exact
              path="/"
              render={() => (currentUser ? <HomePage /> : <SignIn />)}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
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
