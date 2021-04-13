import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { setFinances } from './redux/finance/finance.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Navbar from './components/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ExpensesPage from './pages/expenses/expenses.component';
import ExchangePage from './pages/exchange/exchange.component';

import GlobalStyle from './GlobalStyles';
import {
  auth,
  createUserDocument,
  getUserFinancesRef,
} from './firebase/firebase.utils';

const App = ({ setCurrentUser, currentUser, setFinances }) => {
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
        });
      } else {
        setCurrentUser(null);
        setFinances({
          expenses: null,
          income: null,
          savings: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser, setFinances]);

  return (
    <div>
      <GlobalStyle />
      {currentUser ? <Navbar /> : null}
      <Switch>
        <Route path="/expenses">
          <ExpensesPage />
        </Route>
        <Route path="/savings">
          <ExpensesPage />
        </Route>
        <Route path="/exchange">
          <ExchangePage />
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setFinances: (finances) => dispatch(setFinances(finances)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
