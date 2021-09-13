import { createSelector } from 'reselect';

const selectFinance = (state) => state.finance;

export const selectExpenses = createSelector(
  [selectFinance],
  (finance) => finance.expenses
);

export const selectIncome = createSelector(
  [selectFinance],
  (finance) => finance?.income
);

export const selectExpensesLogs = createSelector([selectFinance], (finance) => finance?.expensesLogs);

export const selectIncomeLogs = createSelector([selectFinance], (finance) => finance?.incomeLogs);

export const selectHistoryLogs = createSelector([selectFinance], (finance) => finance?.historyLogs);

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

export const selectTotalExpensesIncomeArr = createSelector(
  [selectTotalExpenses, selectTotalIncome],
  (totalExpenses, totalIncome) => [
    { amount: totalExpenses, name: 'Expenses', bgColor: '#E6504C' },
    { amount: totalIncome, name: 'Income', bgColor: '#44D495' },
  ]
);

export const selectBalance = createSelector(
  [selectTotalExpenses, selectTotalIncome],
  (totalExpenses, totalIncome) => totalIncome - totalExpenses
);

export const selectCurrency = createSelector(
  [selectFinance],
  (finance) => finance.currency
);

export const selectPercentageExpenses = createSelector(
  [selectExpenses, selectTotalExpenses],
  (expenses, totalExpenses) =>
    expenses?.map((expense) => ({
      ...expense,
      percent: Number(((expense.amount / totalExpenses) * 100).toFixed(2)),
    }))
);

export const selectPercentageIncome = createSelector(
  [selectIncome, selectTotalIncome],
  (income, totalIncome) =>
    income?.map((singleIncome) => ({
      ...singleIncome,
      percent: Number(((singleIncome.amount / totalIncome) * 100).toFixed(2)),
    }))
);
