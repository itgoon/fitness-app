import { useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { ScheduleService } from 'src/service';
import { DateReqFormat } from '../../utils/formatTime';
import Button from '../../components/Button';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function WeekCalendar() {
  const today = dayjs();

  const { palette } = useTheme();

  const navigate = useNavigate();

  const light = palette.mode === 'light';

  const grey600 = light ? palette.grey[600] : palette.common.white;

  const black = light ? palette.common.black : palette.common.white;

  const firstDay = today.startOf('week');

  const settingDate = () => {
    const list = Array.from({ length: 7 }, (_, index) => {
      const date = firstDay.add(index, 'day');
      const day = WEEKDAYS[date.day()];

      return { date: date.format(DateReqFormat), day };
    });

    return list;
  };

  const dateList = useMemo(() => settingDate(), []);

  const getTypographyVariant = (isToday: boolean, type: 'day' | 'date') => {
    if (type === 'day') return isToday ? 'Body13/semiBold' : 'Body13/regular';
    return isToday ? 'Body15/regular' : 'Body15/light';
  };

  useEffect(() => {
    loadScheduleList();
  }, []);

  const loadScheduleList = async () => {
    const res = await ScheduleService.loadScheduleList({});

    console.log(res);
  };

  return (
    <Box className="weekCalendar" display="flex" padding={1.5}>
      {dateList.map((item, key) => {
        const isToday = dayjs().isSame(dayjs(item.date, DateReqFormat), 'day');
        const typoColor = isToday ? black : grey600;

        return (
          <Button
            sx={{ flex: 1, minWidth: 46, minHeight: 54, padding: '0 0 6px' }}
            onClick={() => navigate(`/schedule?date=${item.date}`)}
            key={key}
          >
            <Stack gap={1}>
              <Typography
                variant={getTypographyVariant(isToday, 'day')}
                color={typoColor}
              >
                {isToday ? '오늘' : item.day}
              </Typography>

              <Stack>
                <Typography
                  variant={getTypographyVariant(isToday, 'date')}
                  color={typoColor}
                >
                  {dayjs(item.date).format('D')}
                </Typography>

                {/* <Box display="flex" gap={1} ml={1.4}>
                  {isOrange && <Badge color="warning" variant="alway" />}
                  {isGreen && <Badge color="success" variant="online" />}
                </Box> */}
              </Stack>
            </Stack>
          </Button>
        );
      })}
    </Box>
  );
}
