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

const getMonthlyExpenseIncomeBalance = (dataSet) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let financeMonthlyArr = [];

  dataSet.forEach((data, index) => {
    let monthlyAmount = 0;

    if (data.logs.length) {
      monthlyAmount = data.logs.reduce((acc, entry) => {
        const logDate = new Date(entry.date.seconds * 1000);
        const logMonth = logDate.getMonth();
        const logYear = logDate.getFullYear();
        const monthToCheck = currentMonth - 1 >= 0 ? currentMonth - 1 : 11;
        const yearToCheck = monthToCheck === 11 ? currentYear - 1 : currentYear;

        if (logMonth === monthToCheck && logYear === yearToCheck) {
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
      percent: Number(((category.amount / monthlyFinanceSum) * 100).toFixed(2)),
    }
  })
}

export const generateHistoryChart = (data) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const monthToCheck = currentMonth - 1 >= 0 ? currentMonth - 1 : 11;
  const yearToCheck = monthToCheck === 11 ? currentYear - 1 : currentYear;

  const expenseMonthlyArr = getMonthlyExpenseIncomeBalance(data.expenses);
  const incomeMonthlyArr = getMonthlyExpenseIncomeBalance(data.income);

  const expenseMonthlyPercentArr = getMonthlyExpenseIncomePercent(expenseMonthlyArr);
  const incomeMonthlyPercentArr = getMonthlyExpenseIncomePercent(incomeMonthlyArr);

  return {
    expensesArr: expenseMonthlyPercentArr,
    incomeArr: incomeMonthlyPercentArr,
    date: `${monthToCheck}/${yearToCheck}`
  }
}