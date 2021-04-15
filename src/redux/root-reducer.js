import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import financeReducer from './finance/finance.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  finance: financeReducer,
});

export default rootReducer;
