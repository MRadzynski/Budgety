import { ICurrentUser } from '../../utils/interfaces';
import { UserActionTypes } from './user.types';

interface UserAction {
  type: string;
  payload: ICurrentUser;
}

interface UserState {
  currentUser: ICurrentUser | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
