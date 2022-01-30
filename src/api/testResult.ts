import axios from 'axios';
import { generatePath } from 'react-router-dom';
import { TestResult } from '../types';
import { getJWTFromLocalStorage } from '../utils';

export const getTestResult = (testId: string): Promise<TestResult> =>
  new Promise((resolve, reject) => {
    const jwt = getJWTFromLocalStorage();
    axios
      .get(generatePath('/tests/results/:testId', { testId }), {
        headers: {
          Authorization: jwt ? `Bearer ${jwt}` : '',
        },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response.data));
  });
