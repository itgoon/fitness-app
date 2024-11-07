import dayjs from 'dayjs';
import {
  DatePicker as CustomDatePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import CalendarHeader from '../CalendarHeader';
import { IDatePicker } from '../types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Icon from '../../../Icon';
import { useState } from 'react';

/**
 * 모달에 사용되는 데이트 캘린더
 * isModal 헤더 타입 변경
 */
export default function DatePicker({ isModal = true, onChange }: IDatePicker) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <CustomDatePicker
          showDaysOutsideCurrentMonth
          value={dayjs()}
          onChange={onChange}
          // onOpen={isOpen}
          format={'YYYY-MM-DD'}
          slots={{
            toolbar: () => <></>,
            actionBar: () => <></>,
            openPickerIcon: (e) => {
              return <Icon name="PickerCalendarSvg" size={24} {...e} />;
            },
            calendarHeader: (e) => {
              return <CalendarHeader isModal={isModal} {...e} />;
            }
          }}
          sx={{}}
        />
      </LocalizationProvider>
    </>
  );
}
