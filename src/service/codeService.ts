import { Response } from 'src/types';
import { reqGetComboList } from 'src/api/code';

import { ResCombo, ComboName, ComboType } from 'src/types/code';

/**
 * 콤보 목록 조회
 * @param type 'code' | 'membership'
 * @param name 'MEMBER_STATUS' | 'APPLICATION_TYPE' | 'duty'
 * @returns
 */
export const loadComboList = async (
  type: ComboType,
  name: ComboName,
  params?: any
): Promise<Response<ResCombo[]>> => {
  const res = await reqGetComboList(type, name, params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
