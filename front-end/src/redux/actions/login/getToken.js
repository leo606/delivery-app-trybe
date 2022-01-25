import axios from 'axios';
import md5Serialize from '../../../helpers/md5Serialize';
import status from '../../../helpers/status';

const LOGIN_URL = 'http://localhost:3001/login';

export const GET_AUTH = 'GET_AUTH';

export const getToken = (payload) => ({
  type: GET_AUTH,
  payload,
});

export const requestToken = ({ email, password }) => async (dispatch) => {
  try {
    const passwordMd5 = md5Serialize(password);
    const res = await axios.post(LOGIN_URL, {
      email,
      password: passwordMd5,
    });
    if (res.status === status.OK) return dispatch(getToken(res.data));
  } catch (err) {
    const { response } = err;
    if (response.status === status.NOT_FOUND) {
      return dispatch(getToken({ err: response }));
    }
  }
};
