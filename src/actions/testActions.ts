import { SET_TEST_LENGTH } from '../constants';

export const setTestLength = (testLength: number) => ({ type: SET_TEST_LENGTH, payload: { testLength } });
