import { FinanceActionTypes } from './finance.types';

const INITIAL_STATE = {
  expenses: null,
  income: null,
  savings: null,
};

const financeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FinanceActionTypes.SET_FINANCES:
      return {
        ...state,
        expenses: action.payload.expenses,
        income: action.payload.income,
        savings: action.payload.savings,
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
    default:
      return state;
  }
};

export default financeReducer;
