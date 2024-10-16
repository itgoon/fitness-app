import { Response } from 'src/types';
import * as LicenseApi from 'src/api/license';

/**
 * 라이센스 조회
 * @param params
 * @returns
 */
export const reqGetLicense = async (
  licenseMemberId: number
): Promise<Response<any>> => {
  const res = await LicenseApi.reqGetLicense(licenseMemberId);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 라이센스 등록
 *
 * expiryDate: "2024-03-20T15:00:00.000Z"
 * issueDate: "2024-03-20T15:00:00.000Z"
 * @param params
 * @returns
 */
export const reqPostLicense = async (params: {
  expiryDate: string;
  issueDate: string;
  file: any;
  licenseResponsibilityId: number;
  memberId: number;
}): Promise<Response<any>> => {
  const res = await LicenseApi.reqPostLicense(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 라이센스 수정
 *
 * expiryDate: "2024-03-20T15:00:00.000Z"
 * issueDate: "2024-03-20T15:00:00.000Z"
 * @param params
 * @returns
 */
export const reqPutLicense = async (params: {
  licenseMemberId: number;
  expiryDate: string;
  issueDate: string;
  file: any;
  licenseResponsibilityId: number;
  memberId: number;
}): Promise<Response<any>> => {
  const res = await LicenseApi.reqPutLicense(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};

/**
 * 라이센스 삭제
 * @param params
 * @returns
 */
export const reqDelLicense = async (
  licenseMemberId: number
): Promise<Response<any>> => {
  const res = await LicenseApi.reqDelLicense(licenseMemberId);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
