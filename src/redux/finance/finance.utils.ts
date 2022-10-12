import {
  ExpensesIncomeData,
  ExpensesIncomeWithLogsData,
  HistoryLogsData
} from '../../utils/interfaces';

interface IDateInfo {
  currentMonth: number;
  currentYear: number;
  monthToCheck: number;
  yearToCheck: number;
}

interface IDateToCheck {
  monthToCheck: number;
  yearToCheck: number;
}

interface IExpensesIncome {
  expenses: ExpensesIncomeWithLogsData[];
  income: ExpensesIncomeWithLogsData[];
}

interface IMonthlyFinanceObj {
  amount: number;
  bgColor: string;
  category: string;
  id: string;
}

interface IUserCreatedAt {
  seconds: number;
  miliseconds: number;
}

const getMonthlyExpenseIncomeBalance = (
  dataSet: ExpensesIncomeWithLogsData[],
  dateToCheck: IDateToCheck
) => {
  let financeMonthlyArr: IMonthlyFinanceObj[] = [];

  dataSet.forEach((data, index) => {
    let monthlyAmount = 0;

    if (data.logs.length) {
      monthlyAmount = data.logs.reduce((acc, entry) => {
        const logDate = new Date((entry.date as any).seconds * 1000);
        const logMonth = logDate.getMonth();
        const logYear = logDate.getFullYear();

        if (
          logMonth === dateToCheck.monthToCheck &&
          logYear === dateToCheck.yearToCheck
        ) {
          return (acc += entry.amount);
        } else {
          return acc;
        }
      }, 0);
    }

    const newMonthFinanceObj = {
      amount: monthlyAmount,
      bgColor: dataSet[index].bgColor,
      category: dataSet[index].category,
      id: dataSet[index].id
    };

    financeMonthlyArr.push(newMonthFinanceObj);
  });

  return financeMonthlyArr;
};

const getMonthlyExpenseIncomePercent = (data: ExpensesIncomeData[]) => {
  const monthlyFinanceSum = getMonthlyFinanceSum(data);

  return data.map(category => ({
    ...category,
    percent:
      Number(((category.amount / monthlyFinanceSum) * 100).toFixed(2)) || 0
  }));
};

export const formatCurrency = (money: number, currencyName?: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyName || 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(money);

export const formatMonth = (date: string) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const month = Number(date.split('/')[0]);
  const year = date.split('/')[1];

  if (!month || !year) return date;

  return `${months[month]} ${year}`;
};

export const formatName = (text: string) =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();

export const formatNumber = (money: number) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(money);

export const generateHistoryChart = (
  userCreatedAt: IUserCreatedAt,
  historyLogs: HistoryLogsData[],
  data: IExpensesIncome,
  dateInfo: IDateInfo
) => {
  if (!historyLogs) return;

  let historyFlag = false;
  const userCreatedAtDate = new Date(userCreatedAt.seconds * 1000);
  const { currentMonth, currentYear, monthToCheck, yearToCheck } = dateInfo;

  if (
    userCreatedAtDate.getMonth() >= currentMonth &&
    userCreatedAtDate.getFullYear() >= currentYear
  )
    return;

  historyLogs.forEach(log => {
    if (log.date.includes(`${monthToCheck}/${yearToCheck}`)) {
      historyFlag = true;
    }
  });

  if (historyFlag) return;

  const dateToCheck = { monthToCheck, yearToCheck };

  const expenseMonthlyArr = getMonthlyExpenseIncomeBalance(
    data.expenses,
    dateToCheck
  );
  const incomeMonthlyArr = getMonthlyExpenseIncomeBalance(
    data.income,
    dateToCheck
  );

  const expenseMonthlyPercentArr =
    getMonthlyExpenseIncomePercent(expenseMonthlyArr);
  const incomeMonthlyPercentArr =
    getMonthlyExpenseIncomePercent(incomeMonthlyArr);

  historyLogs.push({
    date: `${monthToCheck}/${yearToCheck}`,
    expensesArr: expenseMonthlyPercentArr,
    incomeArr: incomeMonthlyPercentArr
  });

  return historyLogs;
};

export const getMonthlyFinanceSum = (data: ExpensesIncomeData[]) =>
  data.reduce((acc, category) => (acc += category.amount), 0);

export const isChartExists = (
  historyLogs: HistoryLogsData[],
  month: number,
  year: number
) => historyLogs?.some(log => log.date.includes(`${month}/${year}`));
