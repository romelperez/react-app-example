import S from 'string';
import axios from 'axios';
import settings from 'settings';

const login = function (data) {
  return axios({
    method: 'post',
    url: `${settings.api}/api/login`,
    data
  });
};

export default { login };
