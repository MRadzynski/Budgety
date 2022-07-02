import { formatCurrency, formatMonth, formatNumber } from './finance.utils';

describe('finance.utils.js', () => {
  it('formatCurrency()', () => {
    const correctNumber = 100;

    const formattedCorrectNumber = formatCurrency(correctNumber, 'EUR');
    const formattedCorrectNumberDefaultCurrency = formatCurrency(correctNumber);

    expect(formattedCorrectNumber).toBe('€100.00');
    expect(formattedCorrectNumberDefaultCurrency).toBe('$100.00');
  });

  it('formatNumber()', () => {
    const correctNumber = 100;

    const formattedNumber = formatNumber(correctNumber);

    expect(formattedNumber).toBe('100.00');
  });

  it('formatMonth()', () => {
    const correctDate = '6/2022';
    const missingYearDate = '6';

    const formattedDate = formatMonth(correctDate);
    const formattedMissingYearDate = formatMonth(missingYearDate);

    expect(formattedDate).toBe('July 2022');
    expect(formattedMissingYearDate).toBe('6');
  });
});
