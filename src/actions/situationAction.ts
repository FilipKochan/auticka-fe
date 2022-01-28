import { Dispatch } from 'redux';
import { SET_SITUATION_ERROR, SET_SITUATION_REQUESTING, SET_SITUATION_SUCCESS } from '../constants';
import { getSituationFromTest } from '../api/situations';
import { Situace } from '../types';
import { setTestLength } from './testActions';

export const setSituation = (testId: string | undefined, question: string | undefined) => (dispatch: Dispatch) => {
  dispatch(setSituationRequesting());
  getSituationFromTest(testId, question)
    .then(({ vyslednaSituace, testLength }) => {
      dispatch(setSituationSuccess(vyslednaSituace));
      dispatch(setTestLength(testLength));
    })
    .catch((message) => dispatch(setSituationError(message)));
};

const setSituationRequesting = () => {
  return { type: SET_SITUATION_REQUESTING };
};

const setSituationSuccess = (situace: Situace) => {
  return { type: SET_SITUATION_SUCCESS, payload: situace };
};
const setSituationError = (message: string) => {
  return { type: SET_SITUATION_ERROR, payload: message };
};
