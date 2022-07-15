import { FinanceActionTypes } from './finance.types';

export const setCurrency = currency => ({
  payload: currency,
  type: FinanceActionTypes.SET_CURRENCY
});

export const setExpenses = expenses => ({
  payload: expenses,
  type: FinanceActionTypes.SET_EXPENSES
});

export const setFinances = finances => ({
  payload: finances,
  type: FinanceActionTypes.SET_FINANCES
});

export const setIncome = income => ({
  payload: income,
  type: FinanceActionTypes.SET_INCOME
});
