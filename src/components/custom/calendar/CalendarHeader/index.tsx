import {
  Badge,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { DateView } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router';
import { CalendarHeaderProps } from '../types';
import { Prev, Next, More } from '../../../Icon/HeaderIcon';

const layoutSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  padding: '15px 16px',
  height: 56
};

export default function CalendarHeader(props: CalendarHeaderProps) {
  const { palette } = useTheme();

  const {
    currentMonth,
    onMonthChange,
    onViewChange,
    view,
    isBadge,
    isModal = false
  } = props;

  const navigate = useNavigate();
  const month = currentMonth.format('YYYY년 M월');

  const toggleView = () => {
    const newView: DateView = view === 'month' ? 'year' : 'month';
    onViewChange?.(newView);
  };

  const changeMonth = (direction: 'next' | 'prev') => {
    const newMonth =
      direction === 'next'
        ? currentMonth.add(1, 'month')
        : currentMonth.subtract(1, 'month');
    onMonthChange(newMonth, direction === 'next' ? 'left' : 'right');
  };

  const renderBadges = () => (
    <Stack paddingX={1.5} gap={1}>
      <Box display={'flex'} gap={3.25} paddingX={2.3}>
        <Box>
          <Badge
            sx={{ '.MuiBadge-badge': { top: '-4px', right: '3px' } }}
            color={'warning'}
            variant={'alway'}
          />
          <Typography variant="Body14/regular">레슨</Typography>
        </Box>
        <Box>
          <Badge
            sx={{ '.MuiBadge-badge': { top: '-4px', right: '4px' } }}
            color={'success'}
            variant={'online'}
          />
          <Typography variant="Body14/regular">운동</Typography>
        </Box>
      </Box>
      <Divider />
    </Stack>
  );

  const renderStandardHeader = () => (
    <Stack className="MuiPickersCalendarHeader-root">
      <Box sx={{ ...layoutSx }}>
        {!isBadge && <Prev onClick={() => navigate(-1)} />}
        <Box
          display={'flex'}
          flex={1}
          gap={0.5}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography onClick={toggleView} variant="Body18/semiBold">
            {month}
          </Typography>
          <More onClick={toggleView} />
        </Box>
      </Box>
      {isBadge && renderBadges()}
    </Stack>
  );

  const renderModalHeader = () => (
    <Stack className="MuiPickersCalendarHeader-root">
      <Box sx={{ ...layoutSx }}>
        <Prev color={'#BDBDBD'} size={20} onClick={() => changeMonth('prev')} />
        <Typography variant="Body18/semiBold" onClick={toggleView}>
          {month}
        </Typography>
        <Next color={'#BDBDBD'} size={20} onClick={() => changeMonth('next')} />
      </Box>
    </Stack>
  );

  return isModal ? renderModalHeader() : renderStandardHeader();
}
