import { ResponsePageList } from 'src/types';
import { reqGetStores } from 'src/api/corporation';

import { ResStore } from 'src/types/corporation/store';

/**
 * 매장 목록 조회
 * @param param0
 * @returns
 */
export const loadStores = async (params: {
  category?: string;
  name?: string;
  page: number;
  size: number;
}): Promise<ResponsePageList<ResStore[]>> => {
  const res = await reqGetStores(params);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
