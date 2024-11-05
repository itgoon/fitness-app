import { Box, Stack, Typography, useTheme } from '@mui/material';
import DateCalendar from '../../components/custom/DateCalendar';
import Button from '../../components/Button';
import { useState } from 'react';
/**
 * ******************************************************
 * 대시보드 화면
 * ******************************************************
 */
interface TimeSlot {
  time: string;
  disabled: boolean;
}
const generateTimeSlotes = (startHour, endHour): TimeSlot[] => {
  return Array.from({ length: endHour - startHour + 1 }, (_, index) => {
    const hour = startHour + index;
    return { time: `${hour < 10 ? '0' : ''}${hour}:00`, disabled: false };
  });
};

export default function ReservationPage() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';

  const [date, setDate] = useState();
  const [timeBtnList, setTimeBtnList] = useState<TimeSlot[]>(
    generateTimeSlotes(9, 19)
  );
  const disableBtn = (index) => {
    setTimeBtnList((prev) => {
      const newList = [...prev];
      newList[index].disabled = true;
      return newList;
    });
  };

  return (
    <Box>
      <DateCalendar />

      <Stack py={4} px={2.5} gap={3}>
        <Typography
          color={grey900}
          variant={'Body18/semiBold'}
          children={'레슨 시간을 선택해주세요.'}
        />
        <Stack gap={1}>
          {timeBtnList.map((btn, index) => {
            const buttonProps = {
              size: 'large' as const,
              variant: 'outlined' as const,
              disabled: btn.disabled,
              sx: { width: timeBtnList[index + 1] ? '100%' : '50%' }
            };
            if (index % 2 === 0) {
              return (
                <Box display={'flex'} gap={1} key={index}>
                  <Button {...buttonProps} onClick={() => disableBtn(index)}>
                    {btn.time}
                  </Button>
                  {timeBtnList[index + 1] && ( // 두 번째 버튼이 존재할 경우에만 추가
                    <Button
                      {...buttonProps}
                      onClick={() => disableBtn(index + 1)}
                    >
                      {timeBtnList[index + 1].time}
                    </Button>
                  )}
                </Box>
              );
            }
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
