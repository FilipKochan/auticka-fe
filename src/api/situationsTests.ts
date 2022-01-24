import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { TestDifficulty, TestLength } from '../types';

export const createTest = async (
  length: TestLength,
  difficulty: TestDifficulty
) => {
  const res = await axios.post(apiBaseUrl + '/test/new', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: { length, difficulty },
  });

  return res;
};
