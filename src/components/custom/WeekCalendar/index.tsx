import dayjs from 'dayjs';

import { IWeekCalendar } from './types';
import { Badge, Box, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { DateReqFormat } from '../../../utils/formatTime';
import Button from '../../Button';

export default function WeekCalendar({
  format = DateReqFormat,
  greenBadge,
  orangeBadge,
  layoutSx
}: IWeekCalendar) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : palette.common.white;
  const black = light ? palette.common.black : palette.common.white;
  const [dateList, setDateList] = useState<
    { date: string; day: string }[] | []
  >([]);
  useEffect(() => {
    settingDate();
  }, []);

  const settingDate = () => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const firstDay = dayjs().startOf('week');
    let list = Array.from({ length: 7 }, (_, index) => {
      const date = firstDay.add(index, 'day');
      const day = week[dayjs().subtract(index, 'day').day()];
      return { date: date.format(format), day };
    });

    setDateList(list);
  };

  return (
    <Box
      className={'weekCalendar'}
      sx={{ display: 'flex', padding: '12px', ...layoutSx }}
    >
      {dateList.map((item, key) => {
        const isToday = dayjs().isSame(dayjs(item.date, format), 'day');
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
                children={isToday ? '오늘' : item.day}
              />
              <Stack>
                <Typography
                  variant={isToday ? 'Body15/regular' : 'Body15/light'}
                  color={isToday ? black : grey600}
                  children={dayjs(item.date).format('D')}
                />

                <Box display={'flex'} gap={1} ml={1.4}>
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
