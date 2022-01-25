import { AnyAction } from 'redux';
import { SET_USER_REQUESTING, SET_USER_SUCCESS, SET_USER_ERROR } from '../constants';
import { Status, User } from '../types';

const initUser: User = {
  state: Status.idle,
};

export const userReducer = (state: User = initUser, action: AnyAction) => {
  switch (action.type) {
    case SET_USER_ERROR:
      return { state: Status.error, error: action.payload.message };
    case SET_USER_REQUESTING:
      return { state: Status.requesting };
    case SET_USER_SUCCESS:
      return {
        name: action.payload.name,
        id: action.payload.id,
        state: Status.success,
      };
    default:
      return state;
  }
};
