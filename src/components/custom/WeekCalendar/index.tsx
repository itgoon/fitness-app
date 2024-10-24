import dayjs from 'dayjs';

import { IWeekCalendar } from './types';
import { Badge, Box, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { DateReqFormat } from '../../../utils/formatTime';
import Button from '../../Button';

export default function WeekCalendar({
  date,
  format = DateReqFormat,
  greenBadge,
  orangeBadge,
  layoutSx
}: IWeekCalendar) {
  const theme = useTheme();
  const grey600 = theme.palette.grey[600];
  const black = theme.palette.common.black;
  const [dateList, setDateList] = useState<string[]>([]);
  useEffect(() => {
    settingDate();
  }, []);

  const settingDate = () => {
    let list: string[] = [];
    for (let index = 0; index < 7; index++) {
      list.push(dayjs(date).subtract(index, 'day').format(format));
    }

    setDateList(list.reverse());
  };

  return (
    <Box
      className={'weekCalendar'}
      sx={{ display: 'flex', padding: '12px', ...layoutSx }}
    >
      {dateList.map((item, key) => {
        const isToday = dayjs(date).isSame(item, 'day');
        const isGreen = greenBadge?.some((evt) => item === evt.date) || false;
        const isOrange = orangeBadge?.some((evt) => item === evt.date) || false;

        return (
          <Button
            sx={{ flex: 1, minWidth: 46, minHeight: 60 }}
            onClick={() => console.log(item)}
            key={key}
          >
            <Stack gap={1}>
              <Typography
                variant={isToday ? 'Body13/semiBold' : 'Body13/regular'}
                color={isToday ? black : grey600}
              >
                {isToday ? '오늘' : dayjs(item, format).format('dd')}
              </Typography>
              <Stack>
                <Typography
                  variant={isToday ? 'Body15/semiBold' : 'Body15/regular'}
                  color={isToday ? black : grey600}
                >
                  {dayjs(item, format).format('D')}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    ml: 1.4
                  }}
                >
                  {isOrange && <Badge color="warning" variant="alway" />}
                  {isGreen && <Badge color="success" variant="online" />}
                </Box>
              </Stack>
            </Stack>
          </Button>
        );
      })}
    </Box>
  );
}
