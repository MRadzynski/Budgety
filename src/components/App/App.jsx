import AppRoutes from '../AppRoutes/AppRoutes';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import GlobalStyle from '../../styles/GlobalStyles';
import Navbar from '../Navbar/Navbar';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrency, setFinances } from '../../redux/finance/finance.actions';
import { setCurrentUser } from '../../redux/user/user.actions';
import { subscribeToFirebase } from '../../firebase/firebase.utils';

const App = ({ currentUser, setCurrency, setCurrentUser, setFinances }) => {
  useEffect(() => {
    const unsubscribe = subscribeToFirebase({
      setCurrency,
      setCurrentUser,
      setFinances
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
        <AppRoutes currentUser={currentUser} />
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
