import { RawAxiosRequestConfig } from 'axios';
import {
  RecordApiRecordControllerFindRecordToFitnessOneByDateRequest,
  RecordApiRecordControllerUpdateEndTimeRequest,
  RecordApiRecordControllerUpdateRequest,
  RecordApiRecordControllerUpdateStartTimeRequest,
  RecordApiRecordControllerUpdateWeightRequest,
  RecordDto,
  RecordFitnessTimeDto,
  RecordsDto
} from 'src/api';
import api from 'src/utils/api';

// 운동 기록 목록 조회
export const loadRecordList = async () => {
  const res = await api.record.recordControllerFindAll();

  const {
    data: { data }
  } = res;

  return data as RecordsDto;
};

// 일자별 운동 기록 조회
export const loadSingleRecord = async (
  requestParameters: RecordApiRecordControllerFindRecordToFitnessOneByDateRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.record.recordControllerFindRecordToFitnessOneByDate(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordFitnessTimeDto;
};

// 운동 기록 정보 수정
export const updateRecord = async (
  requestParameters: RecordApiRecordControllerUpdateRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.record.recordControllerUpdate(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordDto;
};

// 운동 시작 시간 등록
export const updateStartTime = async (
  requestParameters: RecordApiRecordControllerUpdateStartTimeRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.record.recordControllerUpdateStartTime(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordFitnessTimeDto;
};

// 운동 종료 시간 등록
export const updateEndTime = async (
  requestParameters: RecordApiRecordControllerUpdateEndTimeRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.record.recordControllerUpdateEndTime(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordFitnessTimeDto;
};

// 체중 기록 등록
export const updateWeight = async (
  requestParameters: RecordApiRecordControllerUpdateWeightRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.record.recordControllerUpdateWeight(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as RecordFitnessTimeDto;
};
