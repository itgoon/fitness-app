import sign from 'jwt-encode';
/**
 * ******************************************************
 * Auth Service
 * ******************************************************
 *
 * @version 1.0
 * @description 인증 서비스
 *
 */
import { Response } from 'src/types';

import axios from 'axios';

import { reqGetAuthInfo, reqGetBrand, reqPostAuthenticate, reqPutAuthSecretKey } from '../api/auth';
import {
  ReqAuthenticate,
  ReqLogin,
  ResAuthSecretKey,
  ResAuthenticate,
  UserProfile,
} from '../types/auth';

const DUMMY_USER = {
  id: '5e86809283e28b96d2d38537',
  email: 'info@codedthemes.com',
  name: '사용자',
};

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

const createExpire = (days: number): number => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.getTime();
};
const getServiceToken = (): string => sign({ ...DUMMY_USER, exp: createExpire(3) }, 'SECRET');

// export const verifyToken: (st: string) => boolean = (serviceToken) => {
//   if (!serviceToken) {
//     return false;
//   }
//   const decoded: KeyedObject = jwtDecode(serviceToken);
//   /**
//    * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
//    */
//   return decoded.exp > Date.now() / 1000;
// };

export const setSession = (serviceToken?: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

/**
 * 로그인
 * @param params
 * @returns
 */
export const login = async (
  params: ReqLogin
): Promise<{
  serviceToken: string;
  user: UserProfile;
}> => {
  const serviceToken = getServiceToken();

  console.log({ serviceToken });
  setSession(serviceToken);
  return {
    serviceToken,
    user: { ...DUMMY_USER, id: params.userId },
  };
};

/**
 * 로그아웃
 */
export const logout = async () => {
  setSession(null);
};

/**
 * 내정보 조회
 * @returns
 */
export const me = async (): Promise<UserProfile> => DUMMY_USER;

/**
 * 2FA Code 인증
 * @param params
 * @returns
 */
export const verify = async (params: ReqAuthenticate): Promise<Response<ResAuthenticate>> => {
  const res = await reqPostAuthenticate(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 2FA 인증을 위한 개인키(secretKey) 생성
 * @param params
 * @returns
 */
export const secretKey = async (params: ReqLogin): Promise<Response<ResAuthSecretKey>> => {
  const res = await reqPutAuthSecretKey(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 관리자 계정 정보
 * @returns
 */
export const loadAuthInfo = async (): Promise<Response> => {
  const res = await reqGetAuthInfo();
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 브랜드 조회
 * @returns
 */
export const loadGrand = async (): Promise<Response> => {
  const res = await reqGetBrand();
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
