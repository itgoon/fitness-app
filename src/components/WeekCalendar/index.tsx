import dayjs from 'dayjs';

import { IWeekCalendar } from './types';
import { Badge, Box, Stack, Typography, useTheme } from '@mui/material';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { DateReqFormat } from '../../utils/formatTime';

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
      list.push(dayjs(date).subtract(index, 'day').format(format));
    });

    setDateList(list);
  };

  return (
    <Box
      className={'weekCalendar'}
      sx={{ display: 'flex', padding: '12px', ...layoutSx }}
    >
      {dateList.reverse().map((item, key) => {
        const isToday = dayjs(date).format(format) === item ? true : false;
        let isBadge = false;

        if (monthCount) {
          const badgeCount = monthCount?.find((evt) => item === evt.date);
          if (badgeCount) {
            isBadge = true;
          }
        }
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
                  {isBadge && (
                    <>
                      <Badge color="warning" variant="alway" />
                      <Badge color="success" variant="online" />
                    </>
                  )}
                </Box>
              </Stack>
            </Stack>
          </Button>
        );
      })}
    </Box>
  );
}
