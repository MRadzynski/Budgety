export interface ChartDataObject {
  amount: number;
  bgColor: string;
  category: string;
  icon: string;
  id: string;
}

export interface ExpensesIncomeData {
  amount: number;
  bgColor: string;
  category: string;
  categoryId?: string;
  id?: string;
  percent?: number;
}

export interface ExpensesIncomeWithoutPercentData {
  amount: number;
  bgColor: string;
  category: string;
  icon: string;
  id: string;
}

export interface FinancesData {
  expenses: ExpensesIncomeWithLogsData[];
  expensesLogs: SingleExpenseIncomeLogData[];
  historyLogs: HistoryLogsData[];
  income: ExpensesIncomeWithLogsData[];
  incomeLogs: SingleExpenseIncomeLogData[];
}

export interface HistoryLogsData {
  date: string;
  expensesArr: ExpensesIncomeData[];
  incomeArr: ExpensesIncomeData[];
}

export interface ICurrentUser {
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
  displayName?: string;
  email: string;
  id: string;
}

export interface ExpensesIncomeWithLogsData {
  amount: number;
  bgColor: string;
  category: string;
  icon: string;
  id: string;
  logs: SingleExpenseIncomeLogData[];
}

export interface SingleExpenseIncomeLogData {
  amount: number;
  bgColor: string;
  category: string;
  categoryId: string;
  date: Date;
  id: string;
}
