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

export const selectLatestExpenses = createSelector([selectExpenses], (expenses) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const latestMonthExpenses = [];

  expenses?.forEach((expense, index) => {
    const newRecords = expense.logs?.filter(entry => {
      const entryDate = new Date(entry.date.seconds * 1000);

      if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear) {
        return true;
      }
      return false;
    })

    const sumOfExpenses = newRecords?.reduce((acc, entry) => {
      return acc + entry.amount
    }, 0)

    const monthExpenseObj = {
      id: expenses[index].id,
      category: expenses[index].category,
      bgColor: expenses[index].bgColor,
      amount: sumOfExpenses || 0,
    }
    latestMonthExpenses.push(monthExpenseObj);
  })

  return latestMonthExpenses;
})

export const selectLatestExpensesTotal = createSelector([selectLatestExpenses], (latestMonthExpenses) =>
  latestMonthExpenses.reduce((acc, entry) => {
    return acc + entry.amount;
  }, 0)
)

export const selectLatestExpensesPercent = createSelector([selectLatestExpenses, selectLatestExpensesTotal], (latestMonthExpenses, monthlyExpensesTotal) =>
  latestMonthExpenses.map(monthExpense => {
    return {
      ...monthExpense,
      percent: Number(((monthExpense.amount / monthlyExpensesTotal) * 100).toFixed(2))
    }
  }))

export const selectLatestIncome = createSelector([selectIncome], (income) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const latestMonthIncome = [];

  income?.forEach((singleIncome, index) => {
    const newRecords = singleIncome.logs?.filter(entry => {
      const entryDate = new Date(entry.date.seconds * 1000);

      if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear) {
        return true;
      }
      return false;
    })

    const sumOfIncome = newRecords?.reduce((acc, entry) => {
      return acc + entry.amount
    }, 0)

    const monthIncomeObj = {
      id: income[index].id,
      category: income[index].category,
      bgColor: income[index].bgColor,
      amount: sumOfIncome || 0,
    }
    latestMonthIncome.push(monthIncomeObj);
  })

  return latestMonthIncome;
})

export const selectLatestIncomeTotal = createSelector([selectLatestIncome], (latestMonthIncome) =>
  latestMonthIncome.reduce((acc, entry) => {
    return acc + entry.amount;
  }, 0)
)

export const selectLatestIncomePercent = createSelector([selectLatestIncome, selectLatestIncomeTotal], (latestMonthIncome, monthlyIncomeTotal) =>
  latestMonthIncome.map(monthIncome => {
    return {
      ...monthIncome,
      percent: Number(((monthIncome.amount / monthlyIncomeTotal) * 100).toFixed(2))
    }
  }))

export const selectLatestExpensesIncomeArr = createSelector(
  [selectLatestExpensesTotal, selectLatestIncomeTotal],
  (latestTotalExpenses, latestTotalIncome) => [
    { amount: latestTotalExpenses, name: 'Expenses', bgColor: '#E6504C' },
    { amount: latestTotalIncome, name: 'Income', bgColor: '#44D495' },
  ]
);

export const selectLatestBalance = createSelector([selectLatestExpensesTotal, selectLatestIncomeTotal], (totalExpesnes, totalIncome) => totalIncome - totalExpesnes)