import { AnyAction } from 'redux';
import { SET_SITUATION_ERROR, SET_SITUATION_REQUESTING, SET_SITUATION_SUCCESS } from '../constants';
import { Status, SituaceState } from '../types';

const initSituation: SituaceState = {
  status: Status.idle,
};

export const situationReducer = (state: SituaceState = initSituation, action: AnyAction) => {
  switch (action.type) {
    case SET_SITUATION_REQUESTING:
      return {
        status: Status.requesting,
      };
    case SET_SITUATION_ERROR:
      return {
        status: Status.error,
        errorMsg: action.payload,
      };
    case SET_SITUATION_SUCCESS:
      return {
        status: Status.success,
        situace: { ...action.payload },
      };
    default:
      return state;
  }
};
