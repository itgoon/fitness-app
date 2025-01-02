/**
 * ******************************************************
 * MemberShip Service
 * ******************************************************
 *
 * @version 1.0
 * @description 회원 관리
 *
 */
import * as MembershipApi from 'src/api/membership';
import { Response, ResponsePageList } from 'src/types';
import {
  reqGetMember,
  reqPutMember,
  reqGetMembers,
  reqPostMember,
  reqGetMemberRoles,
  reqPostExcelExport,
  reqGetExistMemberId,
  reqGetMemberHistories,
} from 'src/api/membership';

import {
  ResMember,
  ReqMember,
  ReqNewMember,
  ResMemberRole,
  ReqMemberSearch,
  ResMemberHistory,
} from 'src/types/membership/member';

/**
 * 회원 목록 조회
 * @param params
 * @returns
 */
export const loadMembers = async (
  params: ReqMemberSearch
): Promise<ResponsePageList<ResMember[]>> => {
  const res = await reqGetMembers(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 사용자 정보 조회
 * @param params
 * @returns
 */
export const loadMember = async (id: number): Promise<Response<ResMember>> => {
  const res = await reqGetMember(id);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 회원 목록 조회
 * @param params
 * @returns
 */
export const loadMemberHistories = async (params: {
  userId: number;
  page: number;
  size: number;
}): Promise<ResponsePageList<ResMemberHistory[]>> => {
  const res = await reqGetMemberHistories(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 회원 권한 목록 조회
 * @param params
 * @returns
 */
export const loadMemberRoles = async (params: {
  userId: number;
  page: number;
  size: number;
}): Promise<ResponsePageList<ResMemberRole[]>> => {
  const res = await reqGetMemberRoles(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 회원 정보 변경
 * @param params
 * @returns
 */
export const updateMember = async (params: ReqMember): Promise<Response<number>> => {
  const res = await reqPutMember(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 사용자 생성
 * @param params
 * @returns
 */
export const insertMember = async (params: ReqNewMember): Promise<Response<any>> => {
  const res = await reqPostMember(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 아이디 체크
 * @param userId 사용자 아이디
 * @returns
 */
export const loadExistMemberId = async (userId: string): Promise<Response<boolean>> => {
  const res = await reqGetExistMemberId(userId);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 엑셀 다운로드
 * @param params
 * @returns
 */
export const excelExport = async (params: {
  languageCode: string;
  comment: string;
}): Promise<any> => {
  const res = await reqPostExcelExport(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 계정 상태 활성화 API
 * @param params
 * @returns
 */
export const reqPostStatusActivation = async (userId: string, memo: string): Promise<Response> => {
  const res = await MembershipApi.reqPostStatusActivation(userId, memo);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 계정 상태 활성화 정지 API
 * @param userId
 * @param memo
 * @returns
 */
export const reqPutStatusStop = async (userId: string, memo: string): Promise<Response> => {
  const res = await MembershipApi.reqPutStatusStop(userId, memo);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 비밀번호 초기화
 * @param userId
 * @returns
 */
export const reqPostMemberPwdReissue = async (userId: string): Promise<Response> => {
  const res = await MembershipApi.reqPostMemberPwdReissue(userId);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 이메일 인증 완료 처리 API
 * @param userId
 * @param memo
 * @returns
 */
export const reqPutMemberEmailAuth = async (userId: string, memo: string): Promise<Response> => {
  const res = await MembershipApi.reqPutMemberEmailAuth(userId, memo);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 약관 동의 처리 API
 * @param userId
 * @param memo
 * @returns
 */
export const reqPutMemberTermsAgree = async (userId: string, memo: string): Promise<Response> => {
  const res = await MembershipApi.reqPutMemberTermsAgree(userId, memo);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 로그인 이력 목록 조회
 * @param userId
 * @param params
 * @returns
 */
export const reqGetMemberLoginHistory = async (
  userId: string,
  params: { page: number; size: number; start?: number; end?: number }
): Promise<ResponsePageList<any>> => {
  const res = await MembershipApi.reqGetMemberLoginHistory(userId, params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 포인트 목록 조회
 * @param params
 * @returns
 */
export const reqGetMemberPoints = async (params: {
  targetId: number;
  page: number;
  size: number;
  pointAssignStart?: number;
  pointAssignEnd?: number;
}): Promise<ResponsePageList<any>> => {
  const res = await MembershipApi.reqGetMemberPoints(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 포인트 저장
 * @param params
 * @returns
 */
export const reqPostMemberPoint = async (params: {
  targetId: string;
  type: 'EARN' | 'LOSE';
  point: number;
  reason?: string;
}): Promise<ResponsePageList<any>> => {
  const res = await MembershipApi.reqPostMemberPoint(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 권한 목록 조회
 * @param params
 * @returns
 */
export const reqGetRoles = async (params: {
  userId: number;
  brandId: number;
  name?: string;
  type?: string;
  page: number;
  size: number;
}): Promise<Response<any>> => {
  const res = await MembershipApi.reqGetRoles(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 권한 저장
 * @param params
 * @returns
 */
export const reqPostRole = async (params: {
  userId: number;
  roleId: number;
}): Promise<Response<any>> => {
  const res = await MembershipApi.reqPostRole(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 권한 삭제
 * @param params
 * @returns
 */
export const reqDelRole = async (params: {
  userId: number;
  roleId: number;
}): Promise<Response<any>> => {
  const res = await MembershipApi.reqDelRole(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 탈퇴 API
 * @param param0
 * @returns
 */
export const reqPutWithdrawal = async (params: {
  userId: number;
  reason: string;
  comment?: string;
}): Promise<Response<any>> => {
  const res = await MembershipApi.reqPutWithdrawal(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
