import AppRoutes from '../AppRoutes/AppRoutes';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import GlobalStyle from '../../styles/GlobalStyles';
import Navbar from '../Navbar/Navbar';
import React, { useEffect } from 'react';
import {
  auth,
  createUserDocument,
  getUserFinancesRef
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrency, setFinances } from '../../redux/finance/finance.actions';
import { setCurrentUser } from '../../redux/user/user.actions';

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
