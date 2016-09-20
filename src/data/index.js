import S from 'string';
import axios from 'axios';
import settings from 'settings';

const login = function (data) {
  return axios({
    method: 'post',
    url: `${settings.api}/api/users/login`,
    data
  });
};

const register = function (data) {
  return axios({
    method: 'post',
    url: `${settings.api}/api/users/register`,
    data
  });
};

const user = function () {
  return axios({
    method: 'get',
    url: `${settings.api}/api/users/current`,
  });
};

export default {
  login,
  register,
  user,
};
