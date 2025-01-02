import { File } from 'buffer';

import { Response } from 'src/types';

import { api, ApiResponse } from './index';

/**
 * 공통 파일 업로드
 * @param params
 * @returns
 */
export function reqPostAttachment(file: File): ApiResponse<Response<any>> {
  return api.post(
    `/admin/common/attachment`,
    { file },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
}
