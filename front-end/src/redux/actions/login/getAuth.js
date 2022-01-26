import axios from 'axios';
import md5Serialize from '../../../helpers/md5Serialize';
import status from '../../../helpers/status';

const LOGIN_URL = 'http://localhost:3001/login';

export const GET_AUTH = 'GET_AUTH';

export const getAuth = (payload) => ({
  type: GET_AUTH,
  payload,
});

export const requestAuth = ({ email, password }) => async (dispatch) => {
  try {
    const passwordMd5 = md5Serialize(password);
    const res = await axios.post(LOGIN_URL, {
      email,
      password: passwordMd5,
    });
    if (res.status === status.OK) return dispatch(getAuth(res.data));
  } catch (err) {
    const { response } = err;
    if (response.status === status.NOT_FOUND) {
      return dispatch(getAuth({ err: response }));
    }
  }
};
