import { Dispatch } from 'redux';
import { SET_TEST_RESULT_ERROR, SET_TEST_RESULT_REQUESTING, SET_TEST_RESULT_SUCCESS } from '../constants';
import { TestResult } from '../types';
import { getTestResult } from '../api/testResult';

export const setTestResult = (testId: string) => (dispatch: Dispatch) => {
  dispatch(setTestResultRequesting());
  getTestResult(testId)
    .then((data) => dispatch(setTestResultSuccess(data)))
    .catch((errMsg) => dispatch(setTestResultError(errMsg)));
};
export const setTestResultSuccess = (data: TestResult) => ({ type: SET_TEST_RESULT_SUCCESS, payload: data });
export const setTestResultRequesting = () => ({ type: SET_TEST_RESULT_REQUESTING });
export const setTestResultError = (errorMsg?: string) => ({ type: SET_TEST_RESULT_ERROR, payload: errorMsg });
