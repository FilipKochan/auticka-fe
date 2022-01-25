import { Dispatch } from 'redux';
import { apiBaseUrl, SET_USER_ERROR, SET_USER_REQUESTING, SET_USER_SUCCESS } from '../constants';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { loginUser } from '../api/user';
import { getJWTFromLocalStorage, saveJWTToLocalStorage } from '../utils';

// export const loginUserAction = (name: string, password: string) => {
export const loginUserAction = (name: string, password: string, token: string) => (dispatch: Dispatch) => {
  dispatch(setUserRequesting());
  loginUser(name, password, token)
    .then((res) => {
      const token = res.data.jwt;
      const { id, name }: any = jwtDecode(token);
      saveJWTToLocalStorage(token);
      dispatch(setUserSuccess(name, id));
    })
    .catch((err) => dispatch(setUserError(err.response.data)));
};

export const setUserFromJWT = () => (dispatch: Dispatch) => {
  const token = getJWTFromLocalStorage();
  if (!token) return;
  dispatch(setUserRequesting());
  axios
    .post(
      apiBaseUrl + '/user/verify',
      { jwt: token },
      { headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )
    .then((_) => {
      const { id, name }: any = jwtDecode(token);
      dispatch(setUserSuccess(name, id));
    })
    .catch((_) => dispatch(setUserError()));
};

export const setUserRequesting = () => {
  return { type: SET_USER_REQUESTING };
};

export const setUserError = (message?: string) => {
  return { type: SET_USER_ERROR, payload: { message } };
};

export const setUserSuccess = (name: string, id: number) => {
  return { type: SET_USER_SUCCESS, payload: { name, id } };
};
