export const formatCurrency = (money, currencyName) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyName || 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(money);

export const formatNumber = (money) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(money);

const getMonthlyExpenseIncomeBalance = (dataSet, dateToCheck) => {
  let financeMonthlyArr = [];

  dataSet.forEach((data, index) => {
    let monthlyAmount = 0;

    if (data.logs.length) {
      monthlyAmount = data.logs.reduce((acc, entry) => {
        const logDate = new Date(entry.date.seconds * 1000);
        const logMonth = logDate.getMonth();
        const logYear = logDate.getFullYear();

        if (logMonth === dateToCheck.monthToCheck && logYear === dateToCheck.yearToCheck) {
          return acc += entry.amount;
        }
        return 0;
      }, 0)
    }

    const newMonthFinanceObj = {
      id: dataSet[index].id,
      category: dataSet[index].category,
      bgColor: dataSet[index].bgColor,
      amount: monthlyAmount,
    }

    financeMonthlyArr.push(newMonthFinanceObj);
  });

  return financeMonthlyArr;
}

const getMonthlyExpenseIncomePercent = (data) => {
  const monthlyFinanceSum = data.reduce((acc, category) => {
    return acc += category.amount;
  }, 0)

  return data.map(category => {
    return {
      ...category,
      percent: Number(((category.amount / monthlyFinanceSum) * 100).toFixed(2)) || 0,
    }
  })
}

export const generateHistoryChart = (historyLogs, data) => {
  let historyFlag = false;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const monthToCheck = currentMonth - 1 >= 0 ? currentMonth - 1 : 11;
  const yearToCheck = monthToCheck === 11 ? currentYear - 1 : currentYear;

  historyLogs.forEach(log => {
    if (log.date.includes(`${monthToCheck}/${yearToCheck}`)) {
      historyFlag = true;
    }
  })

  if (historyFlag) return;

  const dateToCheck = { monthToCheck, yearToCheck };

  const expenseMonthlyArr = getMonthlyExpenseIncomeBalance(data.expenses, dateToCheck);
  const incomeMonthlyArr = getMonthlyExpenseIncomeBalance(data.income, dateToCheck);

  const expenseMonthlyPercentArr = getMonthlyExpenseIncomePercent(expenseMonthlyArr);
  const incomeMonthlyPercentArr = getMonthlyExpenseIncomePercent(incomeMonthlyArr);

  historyLogs.push({
    expensesArr: expenseMonthlyPercentArr,
    incomeArr: incomeMonthlyPercentArr,
    date: `${monthToCheck}/${yearToCheck}`
  });
  return historyLogs;
}