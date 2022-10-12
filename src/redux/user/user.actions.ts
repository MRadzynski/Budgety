import { ICurrentUser } from '../../utils/interfaces';
import { UserActionTypes } from './user.types';

export const setCurrentUser = (user: ICurrentUser) => ({
  payload: user,
  type: UserActionTypes.SET_CURRENT_USER
});
