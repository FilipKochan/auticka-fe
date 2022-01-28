import axios from 'axios';
import { generatePath } from 'react-router-dom';
import { TestDifficulty, TestLength } from '../types';
import { getJWTFromLocalStorage } from '../utils';

export const createTest = async (length: TestLength, difficulty: TestDifficulty): Promise<number> =>
  new Promise(async (resolve, reject) => {
    const jwt = getJWTFromLocalStorage();
    try {
      const res = await axios.post(
        '/tests/new',
        { length, difficulty },
        {
          headers: {
            Authorization: jwt ? `Bearer ${jwt}` : '',
          },
        }
      );
      resolve(res.data.testId);
    } catch {
      reject('Při tvorbě testu se vyskytla chyba.');
    }
  });

export const answerTestQuestion = (testId: string, question: string, userAnswer: number): Promise<void> =>
  new Promise((resolve, reject) => {
    const jwt = getJWTFromLocalStorage();

    axios
      .post(
        generatePath('/tests/:testId/:question', { testId, question }),
        { userAnswer },
        {
          headers: {
            Authorization: jwt ? `Bearer ${jwt}` : '',
          },
        }
      )
      .then(() => resolve())
      .catch((e) => reject(e.response.data));
  });
