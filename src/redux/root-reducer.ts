import financeReducer from './finance/finance.reducer';
import userReducer from './user/user.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  finance: financeReducer,
  user: userReducer
});

export default rootReducer;
