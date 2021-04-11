import { FinanceAcionTypes } from './finance.types';
import { sumExpenses, sumIncome } from './finance.utils';

const INITIAL_STATE = {
  balance: 0,
  expenses: 0,
  income: 0,
  savings: 0,
};

const financeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FinanceAcionTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: sumExpenses(),
      };
    case FinanceAcionTypes.SET_INCOME:
      return {
        ...state,
        income: sumIncome(),
      };
    default:
      return state;
  }
};

export default financeReducer;
