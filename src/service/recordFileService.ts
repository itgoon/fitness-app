import { RawAxiosRequestConfig } from 'axios';
import {
  RecordDto,
  RecordFileApiRecordFileControllerCreateFileRequest,
  RecordFileApiRecordFileControllerDeleteMultiRequest,
  RecordFileApiRecordFileControllerDeleteRequest,
  RecordFileApiRecordFileControllerFindAllRequest,
  RecordFileApiRecordFileControllerUpdateRequest,
  RecordFilesDto
} from 'src/api';
import api from 'src/utils/api';

// 파일 목록 조회
export const loadRecordFileList = async (
  requestParameters: RecordFileApiRecordFileControllerFindAllRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.recordFile.recordFileControllerFindAll(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordFilesDto;
};

// 파일 수정
export const updateRecordFile = async (
  requestParameters: RecordFileApiRecordFileControllerUpdateRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.recordFile.recordFileControllerUpdate(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordDto;
};

// 파일 등록
export const createRecordFile = async (
  requestParameters: RecordFileApiRecordFileControllerCreateFileRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.recordFile.recordFileControllerCreateFile(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordDto;
};

// 파일 다중 삭제
export const deleteMultiRecordFile = async (
  requestParameters: RecordFileApiRecordFileControllerDeleteMultiRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  await api.recordFile.recordFileControllerDeleteMulti(
    requestParameters,
    options
  );
};

// 파일  삭제
export const deleteRecordFile = async (
  requestParameters: RecordFileApiRecordFileControllerDeleteRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  await api.recordFile.recordFileControllerDelete(requestParameters, options);
};
