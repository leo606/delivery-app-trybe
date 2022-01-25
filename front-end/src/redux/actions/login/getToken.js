import axios from 'axios';
import md5Serialize from '../../../helpers/md5Serialize';
import status from '../../../helpers/status';

const LOGIN_URL = '';

export const GET_AUTH = 'GET_AUTH';

export const getToken = (payload) => ({
  type: GET_AUTH,
  payload,
});

export const requestToken = ({ email, password }) => async (dispatch) => {
  const passwordMd5 = md5Serialize(password);
  const response = await axios({
    method: 'post',
    url: LOGIN_URL,
    data: {
      email,
      password: passwordMd5,
    },
  });

  if (response.status === status.NOT_FOUND) return dispatch(getToken(false));
  if (response.status === status.OK) return dispatch(getToken(response));
};
