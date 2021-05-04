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
