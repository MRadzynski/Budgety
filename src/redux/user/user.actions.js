import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  payload: user,
  type: UserActionTypes.SET_CURRENT_USER
});
