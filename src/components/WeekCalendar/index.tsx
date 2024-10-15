import dayjs from 'dayjs';

import { IWeekCalendar } from './types';
import { Badge, Box, Stack, Typography, useTheme } from '@mui/material';
import Button from '../Button';
import { useEffect, useState } from 'react';

const WeekList = ['일', '월', '화', '수', '목', '금', '토'];

dayjs.locale('ko');

export default function WeekCalendar({
  date,
  format = 'YYYY-MM-DD',
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
      list.push(
        dayjs()
          .add(index - 1, 'day')
          .format(format)
      );
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
                variant={date === item ? 'Body13/semiBold' : 'Body13/regular'}
                color={date === item ? black : grey600}
              >
                {WeekList[index]}
              </Typography>
              <Stack gap={0.5}>
                <Typography
                  variant={date === item ? 'Body15/semiBold' : 'Body15/regular'}
                  color={date === item ? black : grey600}
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
