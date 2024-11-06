import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar as CustomDateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import CalendarHeader from './CalendarHeader';
import { IDatePicker, workData } from './types';
import ServerDay from './PickersDay';
import { Divider } from '@mui/material';

/**
 * 할 일
 * 우선 같은날 여러 데이터가 있는 경우 밷지가 나오는 것을 확인하고
 * 해당 디자인에 맞춰 css를 수정할지 picersday 안에 랜더링 되게 할지 정하기
 */

export default function DateCalendar({
  workData,
  onChange,
  isCheckWorkout = true
}: IDatePicker) {
  const [highlightedDays, setHighlightedDays] = useState<workData[]>([]);
  useEffect(() => {
    if (workData) {
      setHighlightedDays(reducingArray(workData));
    }
  }, []);

  // 같은 날짜가 있는지 그리고 두 값의 타입이 다른 값은 type을 all 로 변경하여 배열에 집어넣어서 리턴해야 한다.
  const reducingArray = (array: workData[]): workData[] => {
    const workDayList = array.reduce<workData[]>((acc, current) => {
      // 현재 날짜와 같은 날짜가 이미 acc에 있는지 확인
      const existing = acc.find((item) => item.date === current.date);

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

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <CustomDateCalendar
          showDaysOutsideCurrentMonth
          slots={{
            calendarHeader: (e) => {
              return <CalendarHeader isCheckWorkout={isCheckWorkout} {...e} />;
            },
            day: ServerDay
          }}
          slotProps={{
            day: {
              highlightedDays
            } as any
          }}
          sx={isCheckWorkout ? {} : { maxHeight: 288, height: 288 }}
          onChange={onChange}
        />
      </LocalizationProvider>
      <Divider sx={{ borderBottomWidth: 8 }} />
    </>
  );
}
