import axios from 'axios';
import { AuthApi, Configuration } from '../api';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('serviceToken-app') || '';
    const center = localStorage.getItem('centerToken-app') || '';
    const role = localStorage.getItem('roleToken-app') || '';

    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.center = center;
      config.headers.role = role;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (res) => {
    const { data } = res;

    if (data.result === 'FAIL') throw new Error('Failed to load');

    return res;
  },

  async (error) =>
    // 토큰 에러의 경우 새로 받은 토큰을 accessToken에 덮어씌우기

    Promise.reject(error)
);

const api = () => {
  const configuration = new Configuration({
    basePath: 'https://fitness-api-dev.itgoon.net/user' // Config.publicApiUrl
  });

  return {
    auth: new AuthApi(configuration)
  };
};

export default api();
