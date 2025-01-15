import { Box, Button, Stack, Typography } from '@mui/material';
import ButtonWrapper from 'src/components/ButtonWrapper';
import StackHeader from 'src/components/common/headers/StackHeader';
import Sizer from 'src/components/common/Sizer';
import Divider from 'src/components/custom/Divider';
import { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import Icon from 'src/components/Icon';
import DateCalendar from 'src/components/dateCalendar';
import { paths } from 'src/routes/paths';
import { useNavigate } from 'react-router';
import TimeSlot from './TimeSlot';
import TimeSlotContainer from './TimeSlotContainer';
import DateSelectDrawer from './DateSelectSwiper';

const dummy = [
  { time: '09:00', disabled: false },
  { time: '10:00', disabled: true },
  { time: '11:00', disabled: false },
  { time: '12:00', disabled: true },
  { time: '13:00', disabled: false },
  { time: '14:00', disabled: false },
  { time: '15:00', disabled: true },
  { time: '16:00', disabled: false },
  { time: '17:00', disabled: false },
  { time: '18:00', disabled: false }
];

export default function ReservationPage() {
  const today = dayjs();

  const navigate = useNavigate();

  const [date, setDate] = useState(today.format('YYYY-MM-DD'));

  const [selectedTime, setSelectedTime] = useState('');

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const onDateChange = useCallback((e: dayjs.Dayjs) => {
    setDate(dayjs(e).format('YYYY-MM-DD'));
    setSelectedTime('');
  }, []);

  const onTimeChange = useCallback((time: string) => {
    setSelectedTime(time);
  }, []);

  // 레슨 관련 데이터 패칭

  return (
    <>
      {/* 헤더 */}
      <StackHeader
        title={
          <Box
            onClick={() => setDrawerIsOpen(true)}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}
          >
            <Box>{dayjs(date).format('YYYY년 MM월')}</Box>
            <Icon name="KeyboardArrowDown" size={22} sx={{ color: 'grey' }} />
          </Box>
        }
      />

      <Stack sx={{ pt: 7, pb: 15 }}>
        {/* 달력 */}
        <DateCalendar value={dayjs(date)} onChange={(e) => onDateChange(e)} />
        <Divider />

        {/* 레슨 시간 셀렉터 */}
        <Sizer>
          <Stack sx={{ py: 4, gap: 3 }}>
            <Typography color="grey.900" variant="Body16/bold">
              레슨 시간을 선택해주세요.
            </Typography>

            <TimeSlotContainer>
              {dummy.map((item) => (
                <TimeSlot
                  key={item.time}
                  time={item.time}
                  onClick={onTimeChange}
                  disabled={item.disabled}
                  isActive={item.time === selectedTime}
                />
              ))}
            </TimeSlotContainer>
          </Stack>

          <ButtonWrapper>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              onClick={() => navigate(paths.reservation.check)}
              disabled={!selectedTime}
            >
              다음
            </Button>
          </ButtonWrapper>
        </Sizer>
      </Stack>

      {/* 달 선택 드로어 */}
      <DateSelectDrawer
        isOpen={drawerIsOpen}
        onOpen={() => setDrawerIsOpen(true)}
        onClose={() => setDrawerIsOpen(false)}
        onDateChange={onDateChange}
      />
    </>
  );
}
