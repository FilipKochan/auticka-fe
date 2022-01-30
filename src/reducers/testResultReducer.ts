import { AnyAction } from 'redux';
import { SET_TEST_RESULT_ERROR, SET_TEST_RESULT_REQUESTING, SET_TEST_RESULT_SUCCESS } from '../constants';
import { TestResultState, Status } from '../types';

const initTestResult: TestResultState = {
  state: Status.idle,
};
export const testResultReducer = (state: TestResultState = initTestResult, action: AnyAction): TestResultState => {
  switch (action.type) {
    case SET_TEST_RESULT_REQUESTING:
      return { state: Status.requesting };
    case SET_TEST_RESULT_ERROR:
      return { state: Status.error, errorMsg: action.payload };
    case SET_TEST_RESULT_SUCCESS:
      return { state: Status.success, testResult: action.payload };
    default:
      return state;
  }
};
