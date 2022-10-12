import { AnyAction } from 'redux';
import { FinanceActionTypes } from './finance.types';
import {
  ExpensesIncomeWithLogsData,
  HistoryLogsData,
  SingleExpenseIncomeLogData
} from '../../utils/interfaces';

interface FinanceState {
  currency: string | null;
  expenses: ExpensesIncomeWithLogsData[] | null;
  expensesLogs: SingleExpenseIncomeLogData[] | null;
  historyLogs: HistoryLogsData[] | null;
  income: ExpensesIncomeWithLogsData[] | null;
  incomeLogs: SingleExpenseIncomeLogData[] | null;
}

const INITIAL_STATE: FinanceState = {
  currency: null,
  expenses: null,
  expensesLogs: null,
  historyLogs: null,
  income: null,
  incomeLogs: null
};

const financeReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): FinanceState => {
  switch (action.type) {
    case FinanceActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case FinanceActionTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case FinanceActionTypes.SET_FINANCES:
      return {
        ...state,
        expenses: action.payload.expenses,
        income: action.payload.income,
        expensesLogs: action.payload.expensesLogs,
        incomeLogs: action.payload.incomeLogs,
        historyLogs: action.payload.historyLogs
      };
    case FinanceActionTypes.SET_INCOME:
      return {
        ...state,
        income: action.payload
      };
    default:
      return state;
  }
};

export default financeReducer;
