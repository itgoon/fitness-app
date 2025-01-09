import { RawAxiosRequestConfig } from 'axios';
import {
  ScheduleApiScheduleControllerCreateRequest,
  ScheduleApiScheduleControllerDeleteRequest,
  ScheduleApiScheduleControllerFindOneRequest,
  ScheduleApiScheduleControllerFindUserScheduleListRequest,
  ScheduleApiScheduleControllerFindUserScheduleRequest,
  ScheduleApiScheduleControllerUpdateRequest,
  ScheduleDto,
  SchedulesDto
} from 'src/api';
import api from 'src/utils/api';

// 달력 일정 목록 조회
export const loadScheduleList = async (
  requestParameters: ScheduleApiScheduleControllerFindUserScheduleListRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res: any = await api.schedule.scheduleControllerFindUserScheduleList(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data;
};

// 예약 목록 조회
export const loadReservationList = async (
  requestParameters: ScheduleApiScheduleControllerFindUserScheduleRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.schedule.scheduleControllerFindUserSchedule(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as SchedulesDto;
};

// 예약 생성
export const createReservation = async (
  requestParameters: ScheduleApiScheduleControllerCreateRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.schedule.scheduleControllerCreate(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as ScheduleDto;
};

// 예약 정보 조회
export const loadSingleReservation = async (
  requestParameters: ScheduleApiScheduleControllerFindOneRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.schedule.scheduleControllerFindOne(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as ScheduleDto;
};

// 일정 정보 수정
export const updateReservation = async (
  requestParameters: ScheduleApiScheduleControllerUpdateRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const res = await api.schedule.scheduleControllerUpdate(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = res;

  return data as ScheduleDto;
};

// 예약 취소
export const deleteReservation = async (
  requestParameters: ScheduleApiScheduleControllerDeleteRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  await api.schedule.scheduleControllerDelete(requestParameters, options);
};
