import { Response } from 'src/types';

import { ResTranslate } from 'src/types/translate';

import { api, ApiResponse } from './index';

/**
 * 언어 목록 조회
 * @returns
 */
export function reqGetTranslate(
  newlang: string
): ApiResponse<Response<ResTranslate>> {
  return api.get(`/admin/i18n/translate/${newlang}/pack`, {
    params: { type: 'ANGULAR_JS' }
  });
}
