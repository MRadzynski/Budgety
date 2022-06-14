import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from './redux/store';
import rootReducer from './redux/root-reducer';
import React from 'react';
import { createStore } from 'redux';

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

// const customRender = (ui, options) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

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

const customRender = (
  ui,
  {
    initialState = initState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from '@testing-library/react';

export { customRender as render };
