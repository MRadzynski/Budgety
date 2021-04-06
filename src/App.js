import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import Navbar from './components/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ExpensesPage from './pages/expenses/expenses.component';

import GlobalStyle from './GlobalStyles';
import { auth, createUserDocument } from './firebase/firebase.utils';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);

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
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
