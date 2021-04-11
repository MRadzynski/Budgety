import { createSelector } from 'reselect';

const selectFinance = (state) => state.finance;

export const selectExpenses = createSelector(
  [selectFinance],
  (finance) => finance.expenses
);

export const selectIncome = createSelector(
  [selectFinance],
  (finance) => finance.income
);
