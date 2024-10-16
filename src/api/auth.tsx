import { Response } from 'src/types';

import { ReqLogin, ReqAuthenticate } from 'src/types/auth';

import { api, ApiResponse } from './index';

/**
 * 로그인
 * @param params
 * @returns
 */
export function reqPostLogin(params: ReqLogin): ApiResponse<Response<any>> {
  return api.post('/admin/auth/login', params);
}

/**
 * 2FA Code 인증
 * @param params
 * @returns
 */
export function reqPostAuthenticate(params: ReqAuthenticate): ApiResponse<Response> {
  return api.post('/admin/auth/authenticate', params);
}

/**
 * 2FA 인증을 위한 개인키(secretKey) 생성
 * @param params
 * @returns
 */
export function reqPutAuthSecretKey(params: ReqLogin): ApiResponse<Response<any>> {
  return api.put('/admin/auth/secretKey', params);
}

/**
 * 관리자 계정 정보
 * @returns
 */
export function reqGetAuthInfo(): ApiResponse<Response<any>> {
  return api.get('/admin/auth/info');
}

/**
 * 브랜드 정보 조회
 * @returns
 */
export function reqGetBrand(): ApiResponse<Response<any>> {
  return api.get('/admin/auth/accessible/brand');
}
