import { Response } from 'src/types';

import { ResCombo, ComboName, ComboType } from 'src/types/code';

import { api, ApiResponse } from './index';

/**
 * 콤보 목록 조회
 * @param type 'code' | 'membership'
 * @param name 'MEMBER_STATUS' | 'APPLICATION_TYPE' | 'duty'
 * @returns
 */
export function reqGetComboList(
  type: ComboType,
  name: ComboName,
  params?: any
): ApiResponse<Response<ResCombo[]>> {
  return api.get(
    `/admin/${type}${type === 'code' ? '/codes' : ''}/${name}/combo`,
    params ? { params } : {}
  );
}
