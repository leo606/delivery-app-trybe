import axios from 'axios';
import status from '../../../helpers/status';

const LOGIN_URL = 'http://';

export const GET_TOKEN = 'GET_TOKEN';

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const requestToken = ({ email, password }) => async (dispatch) => {
  const response = await axios({
    method: 'post',
    url: LOGIN_URL,
    data: {
      email,
      password,
    },
  });

  if (response.status === status.OK) return dispatch(getToken(false));
  if (response.status === status.NOT_FOUND) return dispatch(getToken(response));
};
