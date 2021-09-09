import { FinanceActionTypes } from './finance.types';

const INITIAL_STATE = {
  expenses: null,
  income: null,
  expensesLogs: null,
  incomeLogs: null,
  currency: null,
};

const financeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FinanceActionTypes.SET_FINANCES:
      return {
        ...state,
        expenses: action.payload.expenses,
        income: action.payload.income,
        expensesLogs: action.payload.expensesLogs,
        incomeLogs: action.payload.incomeLogs,
      };
    case FinanceActionTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    case FinanceActionTypes.SET_INCOME:
      return {
        ...state,
        income: action.payload,
      };
    case FinanceActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
};

export default financeReducer;
