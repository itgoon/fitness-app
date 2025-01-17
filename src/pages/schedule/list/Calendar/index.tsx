import DateCalendar from 'src/components/dateCalendar';
import dayjs from 'dayjs';
import { Stack } from '@mui/material';
import CalendarHeader from './CalendarHeader';
import CalendarCaption from './CalendarCaption';

interface CalendarProps {
  value: dayjs.Dayjs;
  onChange: (value: dayjs.Dayjs) => void;
}

export default function Calendar({ value, onChange }: CalendarProps) {
  return (
    <>
      <CalendarHeader value={value} onChange={onChange} />
      <Stack sx={{ pt: 7 }}>
        <CalendarCaption />
        <DateCalendar value={value} onChange={onChange} />
      </Stack>
    </>
  );
}
