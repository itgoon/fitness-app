import {
  DateCalendar as MDateCalendar,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarHeader';

interface DateCalendarProps {
  value: dayjs.Dayjs;
  onChange: (e: dayjs.Dayjs) => void;
  hasHeader?: boolean;
}

export default function DateCalendar({
  value,
  onChange,
  hasHeader = false
}: DateCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <MDateCalendar
        className="main-calendar"
        showDaysOutsideCurrentMonth
        value={value}
        onChange={(e) => onChange(e)}
        slots={{
          calendarHeader: hasHeader
            ? (e) => <CalendarHeader {...e} />
            : () => null
        }}
      />
    </LocalizationProvider>
  );
}
