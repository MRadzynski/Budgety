import { FinanceActionTypes } from './finance.types';

export const setFinances = (finances) => ({
  type: FinanceActionTypes.SET_FINANCES,
  payload: finances,
});

export const setExpenses = (expenses) => ({
  type: FinanceActionTypes.SET_EXPENSES,
  payload: expenses,
});
