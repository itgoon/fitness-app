import { File } from 'buffer';

import { Response } from 'src/types';
import * as CommonApi from 'src/api/common';

/**
 * 공통 파일 업로드
 * @param params
 * @returns
 */
export const reqPostAttachment = async (file: File): Promise<Response<any>> => {
  const res = await CommonApi.reqPostAttachment(file);
  if (res.status !== 200) throw new Error(res.statusText);
  return res.data;
};
