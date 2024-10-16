import dayjs from 'dayjs';

import { IWeekCalendar } from './types';
import { Badge, Box, Stack, Typography, useTheme } from '@mui/material';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { DateReqFormat } from '../../utils/formatTime';

dayjs.locale('ko');

export default function WeekCalendar({
  date,
  format = DateReqFormat,
  onClick,
  onChangeMonth,
  monthCount,
  layoutSx
}: IWeekCalendar) {
  const theme = useTheme();
  const grey600 = theme.palette.grey[600];
  const black = theme.palette.common.black;
  const [dateList, setDateList] = useState<string[]>([]);
  useEffect(() => {
    settingDate();
  }, [date]);

  const settingDate = () => {
    let list: string[] = [];
    [...Array(7)].map((_, index) => {
      list.push(dayjs().add(index, 'day').format(format));
    });

    setDateList(list);
  };

  return (
    <Box
      className={'weekCalendar'}
      sx={{ display: 'flex', padding: '12px', ...layoutSx }}
    >
      {dateList.map((item, index) => {
        let cnt: number = 0;
        const isToday = dayjs(date).format(format) === item ? true : false;

        if (monthCount) {
          const evtCount = monthCount?.find((evt) => item === evt.date);
          cnt = evtCount?.count ? evtCount?.count : 0;
        }

        return (
          <Button
            sx={{ flex: 1, minWidth: 46, minHeight: 60 }}
            onClick={() => onClick && onClick(item)}
          >
            <Stack gap={1}>
              <Typography
                variant={isToday ? 'Body13/semiBold' : 'Body13/regular'}
                color={isToday ? black : grey600}
              >
                {dayjs(item, format).format('dd')}
              </Typography>
              <Stack gap={0.5}>
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
                    ml: 1
                  }}
                >
                  <Badge color="warning" variant="alway" />
                  <Badge color="success" variant="online" />
                </Box>
              </Stack>
            </Stack>
          </Button>
        );
      })}
    </Box>
  );
}
