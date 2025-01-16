import {
  DateCalendar as MDateCalendar,
  LocalizationProvider,
  DateCalendarProps as MDateCalendarProps
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CustomDay from './CustomDay';

interface DateCalendarProps extends MDateCalendarProps<dayjs.Dayjs> {
  value: dayjs.Dayjs;
  onChange: (e: dayjs.Dayjs) => void;
}

export default function DateCalendar({
  value,
  onChange,
  ...props
}: DateCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <MDateCalendar
        className="main-calendar"
        showDaysOutsideCurrentMonth
        value={value}
        onChange={(e) => onChange(e)}
        slots={{
          calendarHeader: () => null,
          day: (e) => <CustomDay {...e} />,
          ...props.slots
        }}
      />
    </LocalizationProvider>
  );
}
