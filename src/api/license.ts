import { Response } from 'src/types';

import { api, ApiResponse } from './index';

/**
 * 라이센스 조회
 * @param params
 * @returns
 */
export function reqGetLicense(licenseMemberId: number): ApiResponse<Response<any>> {
  return api.get(`/admin/license/member/${licenseMemberId}`, {});
}

/**
 * 라이센스 등록
 *
 * expiryDate: "2024-03-20T15:00:00.000Z"
 * issueDate: "2024-03-20T15:00:00.000Z"
 * @param params
 * @returns
 */
export function reqPostLicense({
  licenseResponsibilityId,
  memberId,
  ...params
}: {
  expiryDate: string;
  issueDate: string;
  file: any;
  licenseResponsibilityId: number;
  memberId: number;
}): ApiResponse<Response<any>> {
  return api.post(`/admin/license/member`, {
    ...params,
    licenseResponsibility: {
      id: licenseResponsibilityId,
    },
    member: {
      id: memberId,
    },
  });
}

/**
 * 라이센스 수정
 *
 * expiryDate: "2024-03-20T15:00:00.000Z"
 * issueDate: "2024-03-20T15:00:00.000Z"
 * @param params
 * @returns
 */
export function reqPutLicense({
  licenseMemberId,
  licenseResponsibilityId,
  memberId,
  ...params
}: {
  licenseMemberId: number;
  expiryDate: string;
  issueDate: string;
  file: any;
  licenseResponsibilityId: number;
  memberId: number;
}): ApiResponse<Response<any>> {
  return api.put(`/admin/license/member/${licenseMemberId}`, {
    ...params,
    licenseResponsibility: {
      id: licenseResponsibilityId,
    },
    member: {
      id: memberId,
    },
  });
}

/**
 * 라이센스 삭제
 * @param params
 * @returns
 */
export function reqDelLicense(licenseMemberId: number): ApiResponse<Response<any>> {
  return api.delete(`/admin/license/member/${licenseMemberId}`, {});
}
