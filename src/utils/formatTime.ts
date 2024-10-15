import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export const TimeFormat = 'HH:mm';

export const DateFormat = 'YYYY.MM.DD';
export const MonthFormat = 'YYYY.MM';
export const YearFormat = 'YYYY';
export const DateReqFormat = 'YYYY-MM-DD';
export const DateViewFormat = 'YYYY년 M월 D일';
export const YearMonthKR = 'YYYY MM월';
export const YearMonthTextField = 'YYYY. MM';

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
