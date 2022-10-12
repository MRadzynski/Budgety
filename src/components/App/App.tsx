import AppRoutes from '../AppRoutes/AppRoutes';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import GlobalStyle from '../../styles/GlobalStyles';
import Navbar from '../Navbar/Navbar';
import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ExpensesIncomeWithLogsData,
  FinancesData,
  HistoryLogsData,
  ICurrentUser,
  SingleExpenseIncomeLogData
} from '../../utils/interfaces';
import { FinanceActionTypes } from '../../redux/finance/finance.types';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrency, setFinances } from '../../redux/finance/finance.actions';
import { setCurrentUser } from '../../redux/user/user.actions';
import { subscribeToFirebase } from '../../firebase/firebase.utils';
import { UserActionTypes } from '../../redux/user/user.types';

interface AppProps {
  currentUser: ICurrentUser;
  setCurrency: (a: string) => void;
  setCurrentUser: (a: ICurrentUser) => void;
  setFinances: (a: FinancesData) => void;
}

interface ReduxStore {
  currentUser: ICurrentUser;
}

interface SetCurrencyAction {
  payload: string;
  type: typeof FinanceActionTypes.SET_CURRENCY;
}

interface SetCurrentUserAction {
  payload: ICurrentUser;
  type: typeof UserActionTypes.SET_CURRENT_USER;
}

interface SetFinancesAction {
  payload: {
    expenses: ExpensesIncomeWithLogsData[];
    expensesLogs: SingleExpenseIncomeLogData[];
    historyLogs: HistoryLogsData[];
    income: ExpensesIncomeWithLogsData[];
    incomeLogs: SingleExpenseIncomeLogData[];
  };
  type: typeof FinanceActionTypes.SET_FINANCES;
}

type ReduxActions =
  | SetCurrencyAction
  | SetCurrentUserAction
  | SetFinancesAction;

const App = ({
  currentUser,
  setCurrency,
  setCurrentUser,
  setFinances
}: AppProps) => {
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

const mapStateToProps = (state: ReduxStore) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxActions>) => ({
  setCurrency: (currency: string) => dispatch(setCurrency(currency)),
  setCurrentUser: (user: ICurrentUser) => dispatch(setCurrentUser(user)),
  setFinances: (finances: FinancesData) => dispatch(setFinances(finances))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
