import { Badge, Box, Divider, Stack, Typography } from '@mui/material';
import { DateView, PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import Icon from '../../Icon';
export default function CalendarHeader(
  props: PickersCalendarHeaderProps<Dayjs>
) {
  const { currentMonth, onMonthChange, onViewChange, view } = props;

  const month = currentMonth.format('YYYY년 M월');

  const viewChange = () => {
    let newView: DateView = 'month';
    console.log({ newView });

    if (view === 'month') newView = 'year';
    if (onViewChange) onViewChange(newView);
  };

  return (
    <Stack className="MuiPickersCalendarHeader-root">
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={1 / 2}
        py={1.87}
      >
        <Typography onClick={viewChange} variant="Body18/semiBold">
          {month}
        </Typography>
        <Icon size={18} name="ExpendMoreSvg" />
      </Box>

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
    </Stack>
  );
}
