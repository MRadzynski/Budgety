export const formatCurrency = (money, currencyName) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyName,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(money);
