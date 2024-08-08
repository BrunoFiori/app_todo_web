import { Dispatch } from 'redux';

import api from '../Api/axios';

export const LOGIN = 'LOGIN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
  const response = await api.post('/auth/login', { username, password });
  dispatch({ type: LOGIN, payload: response.data });
};

export const refreshToken = (refreshToken: string) => async (dispatch: Dispatch) => {
  const response = await api.post('/auth/refresh', { refreshToken });
  dispatch({ type: REFRESH_TOKEN, payload: response.data });
};
