export const calculateSum = (categories) => {
  if (!categories) return;
  return categories.reduce((acc, category) => acc + category.amount, 0);
};

export const formatCurrency = (money) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(money);
