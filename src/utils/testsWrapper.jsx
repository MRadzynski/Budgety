import configureStore from 'redux-mock-store';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

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
