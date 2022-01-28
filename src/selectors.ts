import { State } from './types';

export const getNotification = (state: State) => state.notification;
export const getUser = (state: State) => state.user;

export const getSituationStatus = (state: State) => state.situation.status;
export const getSituationError = (state: State) => state.situation.errorMsg;
export const getSituation = (state: State) => state.situation.situace;

export const getTest = (state: State) => state.test;
