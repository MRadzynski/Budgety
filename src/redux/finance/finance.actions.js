import { FinanceActionTypes } from './finance.types';

export const setFinances = (finances) => ({
  type: FinanceActionTypes.SET_FINANCES,
  payload: finances,
});

export const setExpenses = (expenses) => ({
  type: FinanceActionTypes.SET_EXPENSES,
  payload: expenses,
});

export const setIncome = (income) => ({
  type: FinanceActionTypes.SET_INCOME,
  payload: income,
});

export const setCurrency = (currency) => ({
  type: FinanceActionTypes.SET_CURRENCY,
  payload: currency,
});
