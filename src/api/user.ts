import axios from 'axios';

export const loginUser = (name: string, password: string, token: string) => {
  return axios.post('/user/login', { name, password, token });
};

export const createUser = (name: string, password: string, token: string) => {
  return axios.post('/user/new', { name, password, token });
};
