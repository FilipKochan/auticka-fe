import axios from 'axios';
import { generatePath } from 'react-router-dom';
import { Situace } from '../types';
import { getJWTFromLocalStorage } from '../utils';

export const getSituationFromTest = (
  testId: string | undefined,
  question: string | undefined
): Promise<{ vyslednaSituace: Situace; testLength: number }> => {
  const jwt = getJWTFromLocalStorage();
  return new Promise((resolve, reject) => {
    axios
      .get(generatePath('/tests/:testId/:question', { testId, question }), {
        headers: { Authorization: jwt ? `Bearer ${jwt}` : '' },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
