import dayjs, { Dayjs } from 'dayjs';
import { Badge, Typography, useTheme } from '@mui/material';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { workData } from './types';

const renderBadge = (work: workData) => {
  switch (work.type) {
    case 'lesson':
      return <Badge color={'warning'} variant={'alway'} />;
    case 'workout':
      return <Badge color={'success'} variant={'online'} />;
    case 'all':
      return (
        <>
          <Badge
            sx={{
              '.MuiBadge-badge': {
                right: '11px !important'
              }
            }}
            color={'warning'}
            variant={'alway'}
          />
          <Badge
            sx={{
              '.MuiBadge-badge': {
                right: '1px !important'
              }
            }}
            color={'success'}
            variant={'online'}
          />
        </>
      );
  }
};
export default function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: workData[] }
) {
  const theme = useTheme();
  const grey400 = theme.palette.grey[400];
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const workForDay = highlightedDays.filter((work) =>
    dayjs(work.date).isSame(day, 'day')
  );
  const hasWorkForDay = !outsideCurrentMonth && workForDay.length > 0;

  return (
    <>
      {hasWorkForDay ? (
        workForDay.map((work, key) => (
          <PickersDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day as Dayjs}
            key={key}
          >
            <Typography color="inherit" variant="Body15/light">
              {dayjs(day).format('DD')}
            </Typography>
            {renderBadge(work)}
          </PickersDay>

          // </Badge>
        ))
      ) : (
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        >
          <Typography
            color={outsideCurrentMonth ? `${grey400}` : 'inherit'}
            variant="Body15/light"
          >
            {dayjs(day).format('DD')}
          </Typography>
        </PickersDay>
      )}
    </>
  );
}
