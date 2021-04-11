import CATEGORIES_DATA from '../../categories.data';

export const sumExpenses = () => {
  const expenses = Object.entries(CATEGORIES_DATA).reduce(
    (acc, item) => acc + item[1].amount,
    0
  );
  return expenses.toFixed(2);
};

export const sumIncome = () => {};

export const formatCurrency = (money) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money);
