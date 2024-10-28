/* eslint-disable */
import Cookies from 'js-cookie';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/api/usuarios/login', values);
      if (response.data.errors) {
        dispatch(loginErr(response.data.errors));
      } else if (response.data.token) {
        Cookies.set('access_token', response.data.token);
        Cookies.set('loggedIn', true);  // Corrigido o nome do cookie
        dispatch(loginSuccess(true));
        callback();  // Chamando o callback após o sucesso
      } else {
        dispatch(loginErr('Token not found'));
      }
    } catch (err) {
      dispatch(loginErr(err));
      callback();  // Chamando o callback em caso de erro
    }
  };
};

const authOLogin = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    Cookies.set('access_token', values.accessToken);
    Cookies.set('loggedIn', true);  // Corrigido o nome do cookie
    dispatch(loginSuccess(true));
    callback();
  };
};

const register = (values) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/register', values);
      if (response.data.errors) {
        dispatch(loginErr('Registration failed!'));
      } else {
        dispatch(loginSuccess(false));
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      Cookies.remove('loggedIn');  // Corrigido o nome do cookie
      Cookies.remove('access_token');
      dispatch(logoutSuccess(false));
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, authOLogin, logOut, register };
