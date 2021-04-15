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

export const selectTotalExpenses = createSelector(
  [selectExpenses],
  (expenses) => {
    if (!expenses) return;
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }
);

export const selectTotalIncome = createSelector([selectIncome], (income) => {
  if (!income) return;
  return income.reduce((acc, singleIncome) => acc + singleIncome.amount, 0);
});
