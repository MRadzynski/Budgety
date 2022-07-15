import { FinanceActionTypes } from './finance.types';

const INITIAL_STATE = {
  currency: null,
  expenses: null,
  expensesLogs: null,
  historyLogs: null,
  income: null,
  incomeLogs: null
};

const financeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FinanceActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case FinanceActionTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case FinanceActionTypes.SET_FINANCES:
      return {
        ...state,
        expenses: action.payload.expenses,
        income: action.payload.income,
        expensesLogs: action.payload.expensesLogs,
        incomeLogs: action.payload.incomeLogs,
        historyLogs: action.payload.historyLogs
      };
    case FinanceActionTypes.SET_INCOME:
      return {
        ...state,
        income: action.payload
      };
    default:
      return state;
  }
};

export default financeReducer;
