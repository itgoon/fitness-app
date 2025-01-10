import axios from 'axios';
import {
  AuthApi,
  CenterApi,
  CenterPolicyApi,
  CodeApi,
  Configuration,
  ContractApi,
  ProductCategoriesApi,
  RecordApi,
  RecordFileApi,
  ScheduleApi
} from '../api';

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
    basePath: 'http://localhost:3000/user' // Config.publicApiUrl
  });

  return {
    auth: new AuthApi(configuration),
    center: new CenterApi(configuration),
    code: new CodeApi(configuration),
    schedule: new ScheduleApi(configuration),
    productCategories: new ProductCategoriesApi(configuration),
    contract: new ContractApi(configuration),
    record: new RecordApi(configuration),
    recordFile: new RecordFileApi(configuration),
    centerPolicy: new CenterPolicyApi(configuration)
  };
};

export default api();
