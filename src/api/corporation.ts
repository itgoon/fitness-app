import { ResponsePageList } from 'src/types';

import { ResStore } from 'src/types/corporation/store';

import { api, ApiResponse } from './index';

/**
 * 매장 목록 조회
 * @param param0
 * @returns
 */
export function reqGetStores(params: {
  category?: string;
  name?: string;
  page: number;
  size: number;
}): ApiResponse<ResponsePageList<ResStore[]>> {
  return api.get(`/admin/corporation/store`, {
    params,
  });
}
