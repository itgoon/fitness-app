import {
  DateCalendar as MDateCalendar,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface DateCalendarProps {
  value: dayjs.Dayjs;
  onChange: (e: dayjs.Dayjs) => void;
}

export default function DateCalendar({ value, onChange }: DateCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <MDateCalendar
        className="main-calendar"
        showDaysOutsideCurrentMonth
        value={value}
        onChange={(e) => onChange(e)}
      />
    </LocalizationProvider>
  );
}
