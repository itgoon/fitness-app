import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import PrevIcon from './PrevIcon';
import NextIcon from './NextIcon';

export default function CalendarHeader({
  currentMonth,
  onMonthChange
}: PickersCalendarHeaderProps<dayjs.Dayjs>) {
  const changeMonth = (direction: 'next' | 'prev') => {
    const newMonth =
      direction === 'next'
        ? currentMonth.add(1, 'month')
        : currentMonth.subtract(1, 'month');

    onMonthChange(newMonth, direction === 'next' ? 'left' : 'right');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        padding: '15px 16px',
        height: 56
      }}
    >
      <PrevIcon onClick={() => changeMonth('prev')} />
      <Typography variant="Body18/semiBold">
        {currentMonth.format('YYYY년 M월')}
      </Typography>
      <NextIcon onClick={() => changeMonth('next')} />
    </Box>
  );
}
