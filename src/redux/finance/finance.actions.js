import { FinanceActionTypes } from './finance.types';

export const setFinances = (finances) => ({
  type: FinanceActionTypes.SET_FINANCES,
  payload: finances,
});
