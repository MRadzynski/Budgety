import { FinanceAcionTypes } from './finance.types';

export const setExpenses = () => ({
  type: FinanceAcionTypes.SET_EXPENSES,
});

export const setIncome = () => ({
  type: FinanceAcionTypes.SET_INCOME,
});
