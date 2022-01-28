import { AnyAction } from 'redux';
import { SET_TEST_LENGTH } from '../constants';
import { Test } from '../types';

const initTest: Test = { testLength: 0 };
export const testReducer = (state: Test = initTest, action: AnyAction) => {
  switch (action.type) {
    case SET_TEST_LENGTH:
      return {
        ...state,
        testLength: action.payload.testLength,
      };
    default:
      return state;
  }
};
