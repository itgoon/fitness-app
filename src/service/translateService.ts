import { Response } from 'src/types';
import { reqGetTranslate } from 'src/api/translate';

import { ResTranslate } from 'src/types/translate';

/**
 * 언어 목록 조회
 * @returns
 */
export const loadTranslate = async (newlang: string): Promise<Response<ResTranslate>> => {
  const res = await reqGetTranslate(newlang);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
