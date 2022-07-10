import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';
import { setFinances, setCurrency } from '../../redux/finance/finance.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  auth,
  createUserDocument,
  getUserFinancesRef
} from '../../firebase/firebase.utils';

import Navbar from '../Navbar/Navbar';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ResetPassword from '../ResetPassword/ResetPassword';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import NotFound from '../NotFound/NotFound';
import Spinner from '../Spinner/Spinner';

import GlobalStyle from '../../styles/GlobalStyles';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ExchangePage = lazy(() =>
  import('../../pages/ExchangePage/ExchangePage')
);
const ExpensesIncomePage = lazy(() =>
  import('../../pages/ExpensesIncomePage/ExpensesIncomePage')
);
const HistoryPage = lazy(() => import('../../pages/HistoryPage/HistoryPage'));
const SettingsPage = lazy(() =>
  import('../../pages/SettingsPage/SettingsPage')
);

const App = ({ setCurrentUser, currentUser, setFinances, setCurrency }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        const financeRef = await getUserFinancesRef(userAuth.uid);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });

        financeRef.onSnapshot(snapshot => {
          setFinances({
            expenses: snapshot.data()?.expenses,
            income: snapshot.data()?.income,
            expensesLogs: snapshot.data()?.expensesLogs,
            incomeLogs: snapshot.data()?.incomeLogs,
            historyLogs: snapshot.data()?.historyLogs
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
          historyLogs: null
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
              path="/expenses/add-new-category"
              render={() =>
                currentUser ? <ExpensesIncomePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/expenses/edit-category/:categoryId"
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
              path="/income/add-new-category"
              render={() =>
                currentUser ? <ExpensesIncomePage /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/income/edit-category/:categoryId"
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

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setFinances: finances => dispatch(setFinances(finances)),
  setCurrency: currency => dispatch(setCurrency(currency))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
