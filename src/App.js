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
    <>
      <GlobalStyle />
      {currentUser ? <Navbar /> : null}
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
            <Route
              path="/reset-password"
              render={() =>
                currentUser ? <Redirect to="/expenses" /> : <ResetPassword />
              }
            ></Route>
            <Route
              exact
              path="/"
              render={() => (currentUser ? <HomePage /> : <SignIn />)}
            ></Route>
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
