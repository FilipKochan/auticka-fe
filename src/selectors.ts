import { State } from './types';

export const getNotification = (state: State) => state.notification;
export const getUser = (state: State) => state.user;

export const getSituationStatus = (state: State) => state.situation.status;
export const getSituationError = (state: State) => state.situation.errorMsg;
export const getSituation = (state: State) => state.situation.situace;

export const getTest = (state: State) => state.test;

export const getTestResultState = (state: State) => ({
  errorMsg: state.testResult.errorMsg,
  state: state.testResult.state,
});
export const getTestResult = (state: State) => state.testResult.testResult;
