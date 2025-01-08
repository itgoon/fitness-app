import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';
import Button from '../../../components/Button';
import { TimeDateFormatKR } from '../../../utils/formatTime';
import { IReservationList, IStep, TimeSlot } from '../types';
import DateCalendar from '../../../components/custom/calendar/DateCalendar';
/**
 * ******************************************************
 * step1
 * ******************************************************
 */

const generateTimeSlotes = (startHour, endHour): TimeSlot[] => Array.from({ length: endHour - startHour + 1 }, (_, index) => {
    const hour = startHour + index;
    return { time: `${hour < 10 ? '0' : ''}${hour}:00`, disabled: false };
  });

export default function ReservationStep1({
  reservationList,
  onNext,
  setReservationList
}: IStep) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';

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

  const reservationTimeChange = (e: any) => {
    const newDate = e.currentTarget.textContent;
    setReservationList &&
      setReservationList((prev: IReservationList) => ({
        ...prev,
        time: newDate
      }));
  };
  const reservationDateChange = (e: any) => {
    setReservationList &&
      setReservationList((prev) => ({
        ...prev,
        date: dayjs(e).format(TimeDateFormatKR)
      }));
  };

  const handleNext = () => {
    if (reservationList?.time !== '' && reservationList?.time !== '') {
      onNext && onNext();
    }
  };

  return (
    <Box>
      <DateCalendar onChange={(e) => reservationDateChange(e)} />

      <Stack px={2.5} gap={3}>
        <Stack py={4} gap={3}>
          <Typography
            color={grey900}
            variant="Body18/semiBold"
            children="레슨 시간을 선택해주세요."
          />
          <Stack gap={1}>
            {timeBtnList.map((btn, index) => {
              const buttonProps = {
                size: 'large' as const,
                color: 'secondary' as const,
                variant: 'outlined' as const,
                disabled: btn.disabled,
                onClick: reservationTimeChange,
                sx: { width: timeBtnList[index + 1] ? '100%' : '50%' }
              };
              if (index % 2 === 0) {
                return (
                  <Box display="flex" gap={1} key={index}>
                    <Button {...buttonProps}>{btn.time}</Button>

                    {timeBtnList[index + 1] && ( // 두 번째 버튼이 존재할 경우에만 추가
                      <Button
                        {...buttonProps}
                        disabled={timeBtnList[index + 1].disabled}
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
        <Button
          typoVariant="Body18/semiBold"
          size="large"
          variant="contained"
          color="primary"
          children="다음"
          onClick={handleNext}
        />
      </Stack>
    </Box>
  );
}
