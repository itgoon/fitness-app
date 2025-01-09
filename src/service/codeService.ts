import { RawAxiosRequestConfig } from 'axios';
import {
  CodeApiCodeGroupControllerFindAllRequest,
  CodeGroupsDto
} from 'src/api';
import api from 'src/utils/api';

export const loadCode = async (
  requestParameters: CodeApiCodeGroupControllerFindAllRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const result = await api.code.codeGroupControllerFindAll(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = result;

  return data as CodeGroupsDto;
};
