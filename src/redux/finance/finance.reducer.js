import { FinanceActionTypes } from './finance.types';
import { calculateSum } from './finance.utils';

const INITIAL_STATE = {
  balance: undefined,
  totalExpenses: undefined,
  totalIncome: undefined,
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
        totalExpenses: calculateSum(action.payload.expenses),
      };
    case FinanceActionTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};

export default financeReducer;
