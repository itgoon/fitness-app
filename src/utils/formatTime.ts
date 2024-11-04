import { format, getTime, formatDistanceToNow } from 'date-fns';
import dayjs from 'dayjs';

import 'dayjs/locale/ko';
dayjs.locale('ko');
// ----------------------------------------------------------------------

export const TimeFormat = 'HH:mm';

export const DateFormat = 'YYYY.MM.DD';
export const MonthFormat = 'YYYY.MM';
export const YearFormat = 'YYYY';
export const DateReqFormat = 'YYYY-MM-DD';
export const DateViewFormat = 'YYYY년 M월 D일';
export const MontFormatKR = 'M월 D일 dddd';
export const YearMonthKR = 'YYYY MM월';
export const YearMonthTextField = 'YYYY. MM';

export const TimeDateFormat = 'yyyy-MM-dd HH:mm';
export const DateResFormat = 'yyyy-MM-dd HH:mm:ss';
type InputValue = Date | string | number | null | undefined;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'p';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: InputValue) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: InputValue) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true
      })
    : '';
}

export function isBetween(
  inputDate: Date | string | number,
  startDate: Date,
  endDate: Date
) {
  const date = new Date(inputDate);

  const results =
    new Date(date.toDateString()) >= new Date(startDate.toDateString()) &&
    new Date(date.toDateString()) <= new Date(endDate.toDateString());

  return results;
}

export function isAfter(startDate: Date | null, endDate: Date | null) {
  const results =
    startDate && endDate
      ? new Date(startDate).getTime() > new Date(endDate).getTime()
      : false;

  return results;
}

// card 관련 시간 함수

// 오전 오후
export const getPeriodTime = (time) => {
  const startHour = parseInt(time.split('~')[0].trim().split(':')[0], 10);
  return startHour < 12
    ? `오전 ${time.split('~')[0]}`
    : `오후 ${time.split('~')[0]}`;
};

// 운동시간
export function getTimeDifference(timeString) {
  // 시작과 종료 시간을 "~"로 분리
  const [start, end] = timeString.split('~').map((time) => time.trim());

  // 각 시간에서 시와 분을 분리하여 숫자로 변환
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);

  // 총 분 단위로 시작 시간과 종료 시간을 계산
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  // 시간 차이를 계산
  const diffMinutes = endTotalMinutes - startTotalMinutes;
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  // 결과를 "X시간 Y분" 형식으로 반환
  return `${hours}시간 ${minutes}분`;
}

// 남은 날짜 계산
export const getRemainDays = (startDay, endDay) => {
  return dayjs(endDay).diff(dayjs(startDay), 'day');
};
