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
import Icon from '../../../Icon';
import { CalendarHeaderProps } from '../types';

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

  return (
    <>
      {!isModal ? (
        <Stack className="MuiPickersCalendarHeader-root">
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={0.5}
            py={'15px'}
            px={'16px'}
            height={56}
          >
            {!isBadge && (
              <Icon
                name={'ArrowBackIosNewRounded'}
                size={22}
                onClick={() => navigate(-1)}
              />
            )}
            <Box
              display={'flex'}
              flex={1}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Typography onClick={toggleView} variant="Body18/semiBold">
                {month}
              </Typography>
              <Icon
                size={29}
                name="ExpandMoreRounded"
                onClick={toggleView}
                color={palette.grey[600]}
              />
            </Box>
          </Box>

          {isBadge && (
            <Stack paddingX={1.5} gap={1}>
              <Box display={'flex'} gap={2.5} paddingX={2.3}>
                <Box>
                  <Badge
                    sx={{ '.MuiBadge-badge': { top: '-5px', right: '5px' } }}
                    color={'warning'}
                    variant={'alway'}
                  />
                  <Typography variant="Body14/regular" children={'레슨'} />
                </Box>
                <Box>
                  <Badge
                    sx={{ '.MuiBadge-badge': { top: '-4px', right: '3px' } }}
                    color={'success'}
                    variant={'online'}
                  />
                  <Typography variant="Body14/regular" children={'운동'} />
                </Box>
              </Box>
              <Divider />
            </Stack>
          )}
        </Stack>
      ) : (
        <Stack className="MuiPickersCalendarHeader-root">
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={1}
            py={1.87}
            height={56}
          >
            <Icon
              name={'ArrowBackIosRounded'}
              color="#BDBDBD"
              size={20}
              onClick={() => changeMonth('prev')}
            />
            <Typography variant="Body18/semiBold" onClick={toggleView}>
              {month}
            </Typography>
            <Icon
              color="#BDBDBD"
              name={'ArrowForwardIosRounded'}
              size={20}
              onClick={() => changeMonth('next')}
            />
          </Box>
        </Stack>
      )}
    </>
  );
}
