import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import GlobalStyle from '../../styles/GlobalStyles';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import ResetPassword from '../ResetPassword/ResetPassword';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Spinner from '../Spinner/Spinner';
import React, { lazy, Suspense, useEffect } from 'react';
import {
  auth,
  createUserDocument,
  getUserFinancesRef
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrency, setFinances } from '../../redux/finance/finance.actions';
import { setCurrentUser } from '../../redux/user/user.actions';

const ExchangePage = lazy(() =>
  import('../../pages/ExchangePage/ExchangePage')
);
const ExpensesIncomePage = lazy(() =>
  import('../../pages/ExpensesIncomePage/ExpensesIncomePage')
);
const HistoryPage = lazy(() => import('../../pages/HistoryPage/HistoryPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const SettingsPage = lazy(() =>
  import('../../pages/SettingsPage/SettingsPage')
);

const App = ({ currentUser, setCurrency, setCurrentUser, setFinances }) => {
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
            expensesLogs: snapshot.data()?.expensesLogs,
            historyLogs: snapshot.data()?.historyLogs,
            income: snapshot.data()?.income,
            incomeLogs: snapshot.data()?.incomeLogs
          });
          setCurrency(snapshot.data()?.currency);
        });
      } else {
        setCurrentUser(null);
        setFinances({
          expenses: null,
          expensesLogs: null,
          historyLogs: null,
          income: null,
          incomeLogs: null
        });
        setCurrency(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrency, setCurrentUser, setFinances]);

  return (
    <>
      <GlobalStyle />
      {currentUser && <Navbar />}
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
  setCurrency: currency => dispatch(setCurrency(currency)),
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setFinances: finances => dispatch(setFinances(finances))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
