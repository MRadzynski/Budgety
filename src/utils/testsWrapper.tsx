import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import {
  ExpensesIncomeWithLogsData,
  HistoryLogsData,
  ICurrentUser,
  SingleExpenseIncomeLogData
} from './interfaces';

interface CustomRenderOptions {
  initialState?: InitialState;
  renderOptions?: any;
}

interface InitialState {
  finance?: {
    currency: string | null;
    expenses?: ExpensesIncomeWithLogsData[] | null;
    expensesLogs?: SingleExpenseIncomeLogData[] | null;
    historyLogs?: HistoryLogsData[] | null;
    income?: ExpensesIncomeWithLogsData[] | null;
    incomeLogs?: SingleExpenseIncomeLogData[] | null;
  };
  user?: {
    currentUser: ICurrentUser | {} | null;
  };
}

const mockStore = configureStore([]);

const initState = {
  finance: {
    currency: null,
    expenses: null,
    expensesLogs: null,
    historyLogs: null,
    income: null,
    incomeLogs: null
  },
  user: {
    currentUser: null
  }
};

const customRender = (
  ui: any,
  { initialState, ...renderOptions }: CustomRenderOptions = {}
) => {
  const AllTheProviders = ({ children }: { children?: JSX.Element }) => {
    const store = mockStore({
      ...initState,
      ...initialState
    });

    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return render(ui, {
    wrapper: AllTheProviders,
    ...renderOptions
  });
};

export * from '@testing-library/react';

export { customRender as render };
