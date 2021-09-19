const FinanceSchema = {
  expenses: [
    {
      id: 1,
      category: 'Food',
      amount: 0,
      bgColor: '#CDB4DB',
      logs: []
    },
    {
      id: 2,
      category: 'Health',
      amount: 0,
      bgColor: '#FFC8DD',
      logs: []
    },
    {
      id: 3,
      category: 'Family',
      amount: 0,
      bgColor: '#BDE0FE',
      logs: []
    },
    {
      id: 4,
      category: 'Bills',
      amount: 0,
      bgColor: '#A0C4FF',
      logs: []
    },
    {
      id: 5,
      category: 'Fashion',
      amount: 0,
      bgColor: '#C07EED',
      logs: []
    },
    {
      id: 6,
      category: 'House',
      amount: 0,
      bgColor: '#8783E0',
      logs: []
    },
    {
      id: 7,
      category: 'Gas',
      amount: 0,
      bgColor: '#A983F7',
      logs: []
    },
    {
      id: 8,
      category: 'Other',
      amount: 0,
      bgColor: '#839CF7',
      logs: []
    }
  ],
  income: [
    {
      id: 9,
      category: 'Job',
      amount: 0,
      bgColor: '#4FF6DD',
      logs: []
    },
    {
      id: 10,
      category: 'Additional work',
      amount: 0,
      bgColor: '#44D495',
      logs: []
    },
    {
      id: 11,
      category: 'Sale',
      amount: 0,
      bgColor: '#89F64F',
      logs: []
    },
    {
      id: 12,
      category: 'Gifts',
      amount: 0,
      bgColor: '#57EB82',
      logs: []
    },
    {
      id: 13,
      category: 'Other',
      amount: 0,
      bgColor: '#44D444',
      logs: []
    },
  ],
  expensesLogs: [],
  incomeLogs: [],
  historyLogs: [],
  currency: 'USD',
};

export default FinanceSchema;
