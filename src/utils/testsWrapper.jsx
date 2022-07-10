import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import React from 'react';

const mockStore = configureStore([]);

const initState = {
  finance: {
    expenses: null,
    income: null,
    expensesLogs: null,
    incomeLogs: null,
    historyLogs: null,
    currency: null
  },
  user: {
    currentUser: null
  }
};

const customRender = (ui, { initialState, ...renderOptions } = {}) => {
  const AllTheProviders = ({ children }) => {
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
