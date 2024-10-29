import { Box, Typography } from '@mui/material';
import { DateView, PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import Icon from '../../Icon';
import { YearMonthKR } from '../../../utils/formatTime';

export default function Header(props: PickersCalendarHeaderProps<Dayjs>) {
  const { currentMonth, onMonthChange, onViewChange, view } = props;

  const NextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');
  const NextYear = () => onMonthChange(currentMonth.add(1, 'year'), 'left');
  const PrevMonth = () =>
    onMonthChange(currentMonth.subtract(1, 'month'), 'right');
  const PrevYear = () =>
    onMonthChange(currentMonth.subtract(1, 'year'), 'right');

  const bool = view === 'day' ? true : false;
  const isDay = view === 'day' ? true : false;

  const month = currentMonth.format(YearMonthKR);

  const viewChange = () => {
    let newView: DateView = 'month';
    console.log({ newView });

    if (view === 'month') newView = 'year';
    if (onViewChange) onViewChange(newView);
  };

  return (
    <Box className="MuiPickersCalendarHeader-root">
      <Icon
        name={'KeyboardDoubleArrowLeft'}
        onClick={isDay ? PrevMonth : PrevYear}
      />

      <Typography onClick={viewChange} variant="Body14/regular">
        {month}
      </Typography>
      <Icon
        name={'KeyboardDoubleArrowRight'}
        onClick={bool ? NextMonth : NextYear}
      />
    </Box>
  );
}
// onClick={onViewChange
