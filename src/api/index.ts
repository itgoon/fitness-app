import axios, { AxiosResponse } from 'axios';

import * as localStorage from 'src/utils/localStorage';

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

const baseUrl = import.meta.env.VITE_BASE_URL
  ? import.meta.env.VITE_BASE_URL
  : 'https://dev.clp.kr';

axios.interceptors.request.use(
  async (config) => {
    // config.baseURL = `${baseUrl}/anchor/api`;

    try {
      const auth = await localStorage.getItem('auth');
      if (auth) {
        const { token } = JSON.parse(auth);
        config.headers.Authtoken = token;
      }
    } catch (err) {
      console.log('err : ', err);
    }

    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const { response } = err;
    if (response) {
      // let message = response.data ? response.data.message : response.message;
      // console.log({
      //   statusCode: response.data.statusCode,
      //   message: message,
      // });
    } else {
      console.log('response err : ', { err });
    }
    return Promise.reject(err);
  }
);

export const api = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
