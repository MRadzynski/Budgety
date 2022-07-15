import { createSelector } from 'reselect';

const selectFinance = state => state.finance;

export const selectExpenses = createSelector(
  [selectFinance],
  finance => finance?.expenses
);

export const selectIncome = createSelector(
  [selectFinance],
  finance => finance?.income
);

export const selectExpensesLogs = createSelector(
  [selectFinance],
  finance => finance?.expensesLogs
);

export const selectIncomeLogs = createSelector(
  [selectFinance],
  finance => finance?.incomeLogs
);

export const selectHistoryLogs = createSelector(
  [selectFinance],
  finance => finance?.historyLogs
);

export const selectTotalExpenses = createSelector(
  [selectExpenses],
  expenses => {
    if (!expenses) return;
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }
);

export const selectTotalIncome = createSelector([selectIncome], income => {
  if (!income) return;
  return income.reduce((acc, singleIncome) => acc + singleIncome.amount, 0);
});

export const selectTotalExpensesIncomeArr = createSelector(
  [selectTotalExpenses, selectTotalIncome],
  (totalExpenses, totalIncome) => [
    { amount: totalExpenses, bgColor: '#E6504C', name: 'Expenses' },
    { amount: totalIncome, bgColor: '#44D495', name: 'Income' }
  ]
);

export const selectBalance = createSelector(
  [selectTotalExpenses, selectTotalIncome],
  (totalExpenses, totalIncome) => totalIncome - totalExpenses
);

export const selectCurrency = createSelector(
  [selectFinance],
  finance => finance?.currency
);

export const selectPercentageExpenses = createSelector(
  [selectExpenses, selectTotalExpenses],
  (expenses, totalExpenses) =>
    expenses?.map(expense => ({
      ...expense,
      percent: Number(((expense.amount / totalExpenses) * 100).toFixed(2))
    }))
);

export const selectPercentageIncome = createSelector(
  [selectIncome, selectTotalIncome],
  (income, totalIncome) =>
    income?.map(singleIncome => ({
      ...singleIncome,
      percent: Number(((singleIncome.amount / totalIncome) * 100).toFixed(2))
    }))
);

export const selectLatestExpenses = createSelector(
  [selectExpenses],
  expenses => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const latestMonthExpenses = [];

    expenses?.forEach((expense, index) => {
      const newRecords = expense.logs?.filter(entry => {
        const entryDate = new Date(entry.date.seconds * 1000);

        if (
          entryDate.getMonth() === currentMonth &&
          entryDate.getFullYear() === currentYear
        ) {
          return true;
        }
        return false;
      });

      const sumOfExpenses = newRecords?.reduce((acc, entry) => {
        return acc + entry.amount;
      }, 0);

      const monthExpenseObj = {
        amount: sumOfExpenses || 0,
        bgColor: expenses[index].bgColor,
        category: expenses[index].category,
        icon: expenses[index].icon,
        id: expenses[index].id
      };
      latestMonthExpenses.push(monthExpenseObj);
    });

    return latestMonthExpenses;
  }
);

export const selectLatestExpensesTotal = createSelector(
  [selectLatestExpenses],
  latestMonthExpenses =>
    latestMonthExpenses.reduce((acc, entry) => {
      return acc + entry.amount;
    }, 0)
);

export const selectLatestExpensesPercent = createSelector(
  [selectLatestExpenses, selectLatestExpensesTotal],
  (latestMonthExpenses, monthlyExpensesTotal) =>
    latestMonthExpenses.map(monthExpense => {
      return {
        ...monthExpense,
        percent: Number(
          ((monthExpense.amount / monthlyExpensesTotal) * 100).toFixed(2)
        )
      };
    })
);

export const selectLatestIncome = createSelector([selectIncome], income => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const latestMonthIncome = [];

  income?.forEach((singleIncome, index) => {
    const newRecords = singleIncome.logs?.filter(entry => {
      const entryDate = new Date(entry.date.seconds * 1000);

      if (
        entryDate.getMonth() === currentMonth &&
        entryDate.getFullYear() === currentYear
      ) {
        return true;
      }
      return false;
    });

    const sumOfIncome = newRecords?.reduce((acc, entry) => {
      return acc + entry.amount;
    }, 0);

    const monthIncomeObj = {
      amount: sumOfIncome || 0,
      bgColor: income[index].bgColor,
      category: income[index].category,
      icon: income[index].icon,
      id: income[index].id
    };
    latestMonthIncome.push(monthIncomeObj);
  });

  return latestMonthIncome;
});

export const selectLatestIncomeTotal = createSelector(
  [selectLatestIncome],
  latestMonthIncome =>
    latestMonthIncome.reduce((acc, entry) => {
      return acc + entry.amount;
    }, 0)
);

export const selectLatestIncomePercent = createSelector(
  [selectLatestIncome, selectLatestIncomeTotal],
  (latestMonthIncome, monthlyIncomeTotal) =>
    latestMonthIncome.map(monthIncome => {
      return {
        ...monthIncome,
        percent: Number(
          ((monthIncome.amount / monthlyIncomeTotal) * 100).toFixed(2)
        )
      };
    })
);

export const selectLatestExpensesIncomeArr = createSelector(
  [selectLatestExpensesTotal, selectLatestIncomeTotal],
  (latestTotalExpenses, latestTotalIncome) => [
    { amount: latestTotalExpenses, bgColor: '#E6504C', name: 'Expenses' },
    { amount: latestTotalIncome, bgColor: '#44D495', name: 'Income' }
  ]
);

export const selectLatestBalance = createSelector(
  [selectLatestExpensesTotal, selectLatestIncomeTotal],
  (latestTotalExpesnes, latestTotalIncome) =>
    latestTotalExpesnes !== 0 || latestTotalIncome !== 0
      ? latestTotalIncome - latestTotalExpesnes
      : null
);

export const selectAllTimeExpensesCategoriesId = createSelector(
  [selectExpensesLogs],
  expensesLogs => {
    const categoriesIds = expensesLogs?.map(
      expenseLog => expenseLog.categoryId
    );

    return Array.from(new Set(categoriesIds));
  }
);

export const selectAllTimeExpensesCategories = createSelector(
  [selectAllTimeExpensesCategoriesId, selectExpensesLogs, selectExpenses],
  (categoriesIds, expensesLogs, expenses) => {
    const zeroValueCategories = expenses?.filter(
      singleIncome => !categoriesIds.includes(singleIncome.id)
    );

    const valuableCategories = categoriesIds?.map(categoryId => {
      const lastOccurence = expensesLogs
        .slice()
        .reverse()
        .findIndex(entry => entry.categoryId === categoryId);
      const foundIndex = expensesLogs.length - 1 - lastOccurence;
      const categoryObj = {
        amount: 0,
        bgColor: expensesLogs[foundIndex].bgColor,
        category: expensesLogs[foundIndex].category,
        categoryId: expensesLogs[foundIndex].categoryId
      };

      const expenseTotalAmount = expensesLogs?.reduce((acc, entry) => {
        if (entry.categoryId === categoryId) {
          return acc + entry.amount;
        } else {
          return acc;
        }
      }, 0);
      categoryObj.amount = expenseTotalAmount;

      return categoryObj;
    });
    return [...valuableCategories, ...zeroValueCategories];
  }
);

export const selectAllTimeExpensesPercent = createSelector(
  [selectAllTimeExpensesCategories],
  allTimeExpensesCategories => {
    const total = allTimeExpensesCategories.reduce(
      (acc, category) => acc + category.amount,
      0
    );

    return allTimeExpensesCategories.map(category => {
      return {
        ...category,
        percent: Number(((category.amount / total) * 100).toFixed(2))
      };
    });
  }
);

export const selectAllTimeIncomeCategoriesId = createSelector(
  [selectIncomeLogs],
  incomeLogs => {
    const categoriesIds = incomeLogs?.map(incomeLog => incomeLog.categoryId);

    return Array.from(new Set(categoriesIds));
  }
);

export const selectAllTimeIncomeCategories = createSelector(
  [selectAllTimeIncomeCategoriesId, selectIncomeLogs, selectIncome],
  (categoriesIds, incomeLogs, income) => {
    const zeroValueCategories = income?.filter(
      singleIncome => !categoriesIds.includes(singleIncome.id)
    );

    const valuableCategories = categoriesIds?.map(categoryId => {
      const lastOccurence = incomeLogs
        .slice()
        .reverse()
        .findIndex(entry => entry.categoryId === categoryId);
      const foundIndex = incomeLogs.length - 1 - lastOccurence;

      const categoryObj = {
        amount: 0,
        bgColor: incomeLogs[foundIndex].bgColor,
        category: incomeLogs[foundIndex].category,
        categoryId: incomeLogs[foundIndex].categoryId
      };

      const incomeTotalAmount = incomeLogs?.reduce((acc, entry) => {
        if (entry.categoryId === categoryId) {
          return acc + entry.amount;
        } else {
          return acc;
        }
      }, 0);
      categoryObj.amount = incomeTotalAmount;

      return categoryObj;
    });

    return [...valuableCategories, ...zeroValueCategories];
  }
);

export const selectAllTimeIncomePercent = createSelector(
  [selectAllTimeIncomeCategories],
  allTimeIncomeCategories => {
    const total = allTimeIncomeCategories.reduce(
      (acc, category) => acc + category.amount,
      0
    );

    return allTimeIncomeCategories.map(category => {
      return {
        ...category,
        percent: Number(((category.amount / total) * 100).toFixed(2))
      };
    });
  }
);
