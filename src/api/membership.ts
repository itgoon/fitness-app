import moment from 'moment';

import { Response, ResponsePageList } from 'src/types';

import {
  ResMember,
  ReqMember,
  ReqNewMember,
  ResMemberRole,
  ReqMemberSearch,
  ResMemberHistory,
} from 'src/types/membership/member';

import { api, ApiResponse } from './index';

/**
 * 사용자 목록
 * @param params
 * @returns
 */
export function reqGetMembers(params: ReqMemberSearch): ApiResponse<ResponsePageList<ResMember[]>> {
  return api.get('/admin/membership/member', { params });
}

/**
 * 사용자 정보 조회
 * @param params
 * @returns
 */
export function reqGetMember(id: number): ApiResponse<Response<ResMember>> {
  return api.get(`/admin/membership/member/${id}`, {});
}

/**
 * 사용자 정보 수정 이력 목록 조회
 * @param params
 * @returns
 */
export function reqGetMemberHistories({
  userId,
  ...params
}: {
  userId: number;
  page: number;
  size: number;
}): ApiResponse<ResponsePageList<ResMemberHistory[]>> {
  return api.get(`/admin/membership/member/${userId}/history/change`, { params });
}

/**
 * 사용자 권한 목록 조회
 * @param params
 * @returns
 */
export function reqGetMemberRoles({
  userId,
  ...params
}: {
  userId: number;
  page: number;
  size: number;
}): ApiResponse<ResponsePageList<ResMemberRole[]>> {
  return api.get(`/admin/membership/member/${userId}/roles`, { params });
}

/**
 * 사용자 정보 변경
 * @param params
 * @returns
 */
export function reqPutMember(params: ReqMember): ApiResponse<Response<number>> {
  return api.put(`/admin/membership/member/${params.id}`, params);
}

/**
 * 사용자 생성
 * @param params
 * @returns
 */
export function reqPostMember(params: ReqNewMember): ApiResponse<Response<any>> {
  return api.post(`/admin/membership/member/v2`, params);
}

/**
 * 아이디 체크
 * @param userId
 * @returns
 */
export function reqGetExistMemberId(userId: string): ApiResponse<Response<boolean>> {
  return api.get(`/admin/membership/member/exists/id`, { params: { userId } });
}

/**
 * 엑셀 export
 * @param params
 * @returns
 */
export function reqPostExcelExport(params: {
  languageCode: string;
  comment: string;
}): ApiResponse<any> {
  return api.post(
    `/admin/membership/member/export?sort=id,desc&languageCode=${params.languageCode}&comment=${params.comment}`,
    params,
    { responseType: 'blob' }
  );
}

/**
 * 계정 상태 활성화 API
 * @param userId
 * @param memo
 * @returns
 */
export function reqPostStatusActivation(userId: string, memo: string): ApiResponse<Response> {
  return api.post(`/admin/membership/member/${userId}/activation`, { memo });
}

/**
 * 계정 상태 활성화 정지 API
 * @param userId
 * @param memo
 * @returns
 */
export function reqPutStatusStop(userId: string, memo: string): ApiResponse<Response> {
  return api.put(`/admin/membership/member/${userId}/stop`, { memo });
}

/**
 * 비밀번호 초기화
 * @param userId
 * @returns
 */
export function reqPostMemberPwdReissue(userId: string): ApiResponse<Response> {
  return api.post(`/admin/membership/member/pwdReissue`, { userId });
}

/**
 * 이메일 인증 완료 처리 API
 * @param userId
 * @param memo
 * @returns
 */
export function reqPutMemberEmailAuth(
  userId: string,
  memo: string
): ApiResponse<Response<boolean>> {
  return api.put(`/admin/membership/member/${userId}/emailAuth`, {
    memo,
    type: 'AUTH_EMAIL',
    agree: moment().utc().toDate().getTime(),
  });
}

/**
 * 약관 동의 처리 API
 * @param userId
 * @param memo
 * @returns
 */
export function reqPutMemberTermsAgree(
  userId: string,
  memo: string
): ApiResponse<Response<boolean>> {
  return api.put(`/admin/membership/member/${userId}/termsAgree`, {
    memo,
    terms: {
      TERMS_OF_SERVICE: moment().utc().toDate().getTime(),
      PRIVACY_STATEMENT: moment().utc().toDate().getTime(),
    },
  });
}

/**
 * 로그인 이력 목록 조회
 * @param userId
 * @param params
 * @returns
 */
export function reqGetMemberLoginHistory(
  userId: string,
  params: { page: number; size: number; start?: number; end?: number }
): ApiResponse<ResponsePageList<any>> {
  return api.get(`/admin/membership/member/${userId}/history/login`, {
    params: {
      ...params,
      sort: 'id,desc',
    },
  });
}

/**
 * 포인트 목록 조회
 * @param params
 * @returns
 */
export function reqGetMemberPoints(params: {
  targetId: number;
  page: number;
  size: number;
  pointAssignStart?: number;
  pointAssignEnd?: number;
}): ApiResponse<ResponsePageList<any>> {
  return api.get(`/admin/membership/point`, {
    params,
  });
}

/**
 * 포인트 저장
 * @param params
 * @returns
 */
export function reqPostMemberPoint({
  targetId,
  type,
  point,
  reason,
}: {
  targetId: string;
  type: 'EARN' | 'LOSE';
  point: number;
  reason?: string;
}): ApiResponse<any> {
  return api.post(`/admin/membership/point`, { targetId, type: { value: type }, point, reason });
}

/**
 * 권한 목록 조회
 * @param params
 * @returns
 */
export function reqGetRoles({
  userId,
  ...params
}: {
  userId: number;
  brandId: number;
  name?: string;
  type?: string;
  page: number;
  size: number;
}): ApiResponse<Response<any>> {
  return api.get(`/admin/membership/member/${userId}/roles/not`, {
    params,
  });
}

/**
 * 권한 저장
 * @param params
 * @returns
 */
export function reqPostRole({
  userId,
  roleId,
}: {
  userId: number;
  roleId: number;
}): ApiResponse<Response<any>> {
  return api.post(`/admin/membership/member/${userId}/roles/${roleId}`, {
    roleId,
    items: [],
    scopeType: 'BRAND',
  });
}

/**
 * 권한 삭제
 * @param param0
 * @returns
 */
export function reqDelRole({
  userId,
  roleId,
}: {
  userId: number;
  roleId: number;
}): ApiResponse<any> {
  return api.delete(`/admin/membership/member/${userId}/roles/${roleId}`);
}

/**
 * 탈퇴 API
 * @param param0
 * @returns
 */
export function reqPutWithdrawal({
  userId,
  comment,
  reason,
}: {
  userId: number;
  reason: string;
  comment?: string;
}): ApiResponse<Response<boolean>> {
  return api.put(`/admin/membership/member/${userId}/withdrawal`, {
    comment,
    reason: {
      value: reason,
    },
  });
}
