import axios from 'axios';
import { apiBaseUrl } from '../constants';

export const loginUser = (name: string, password: string) => {
  return axios.post(
    apiBaseUrl + '/user/login',
    { name, password },
    { headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
  );
};

export const createUser = (name: string, password: string) => {
  return axios.post(
    apiBaseUrl + '/user/new',
    { name, password },
    { headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
  );
};
