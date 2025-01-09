import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar as CustomDateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import ServerDay from './PickersDay';
import CalendarHeader from '../CalendarHeader';
import { IDatePicker, typeWorkData } from '../types';

/**
 * 일정 탭, 레슨 예약 탭에서 사용되는 데이트 캘린더
 * isBadge 헤더 타입 변경
 */

// 같은 날짜가 있는지 그리고 두 값의 타입이 다른 값은 type을 all 로 변경하여 배열에 집어넣어서 리턴해야 한다.
const reducingArray = (array: typeWorkData[]): typeWorkData[] => {
  const workDayList = array.reduce<typeWorkData[]>((acc, current) => {
    // 현재 날짜와 같은 날짜가 이미 acc에 있는지 확인
    const existing = acc.find((item) => item?.date === current.date);

    if (existing) {
      // 같은 날짜가 있으면, 'type'을 'all'로 설정
      if (existing.type !== current.type) {
        existing.type = 'all';
      }
    } else {
      // 같은 날짜가 없으면, current를 acc에 추가
      acc.push(current);
    }
    return acc;
  }, []);
  return workDayList;
};

export default function DateCalendar({
  workData,
  onChange,
  isBadge = false,
  isModal,
  value
}: IDatePicker) {
  const highlightedDays: typeWorkData[] = workData
    ? reducingArray(workData)
    : [];

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <CustomDateCalendar
          className="main-calendar"
          showDaysOutsideCurrentMonth
          slots={{
            calendarHeader: (e) => (
              <CalendarHeader isModal={isModal} isBadge={isBadge} {...e} />
            ),
            day: ServerDay
          }}
          slotProps={{
            day: {
              highlightedDays
            } as any
          }}
          sx={isBadge ? {} : { maxHeight: 288, height: 288 }}
          value={value ? dayjs(value) : dayjs()}
          onChange={(e) => onChange && onChange(e)}
        />
      </LocalizationProvider>
    </>
  );
}
