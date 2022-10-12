import {
  ExpensesIncomeWithLogsData,
  FinancesData
} from '../../utils/interfaces';
import { FinanceActionTypes } from './finance.types';

export const setCurrency = (currency: string) => ({
  payload: currency,
  type: FinanceActionTypes.SET_CURRENCY
});

export const setExpenses = (expenses: ExpensesIncomeWithLogsData[]) => ({
  payload: expenses,
  type: FinanceActionTypes.SET_EXPENSES
});

export const setFinances = (finances: FinancesData) => ({
  payload: finances,
  type: FinanceActionTypes.SET_FINANCES
});

export const setIncome = (income: ExpensesIncomeWithLogsData[]) => ({
  payload: income,
  type: FinanceActionTypes.SET_INCOME
});
