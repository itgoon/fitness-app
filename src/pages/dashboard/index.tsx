import dayjs from 'dayjs';

import { Divider, Stack, Typography, useTheme } from '@mui/material';
import WeekCalendar from '../../components/WeekCalendar';
import { useState } from 'react';
import Button from '../../components/Button';
import Wrap from './wrap/Wrap';
import ReservationCard from '../../components/reservationCard/ReservationCard';
import { MontFormatKR } from '../../utils/formatTime';
/**
 * ******************************************************
 * 대시보드 화면
 * ******************************************************
 */
const dummyMonthCount = [{ date: '2024-10-18', count: 1 }];
const name = '홍길동';
const workMsg = (isWorking) =>
  isWorking
    ? '오늘도 목표를 향해 같이 달려가봐요'
    : '오늘 운동을 시작하지 않으셨네요!';
const Message = ({ name, workMessage }) => (
  <>
    <span>{name} 님,</span>
    <br />
    <span>{workMessage}</span>
  </>
);
export default function DashboardPage() {
  const theme = useTheme();
  const grey = theme.palette.grey[500];
  const blgrey = theme.palette.grey.A200;

  const [isWorking, setIsWorking] = useState(false);
  const [alaram, setAlaram] = useState(false);

  const toggleWorkingState = () => {
    setIsWorking((prev) => !prev);
    setAlaram((prev) => !prev);
  };

  return (
    <Stack>
      <Wrap padding={'0 !important'}>
        <WeekCalendar date={dayjs('2024-10-21')} monthCount={dummyMonthCount} />
      </Wrap>

      <Wrap gap={1} padding={4}>
        <Typography
          variant="Body18/semiBold"
          children={`${dayjs().format(MontFormatKR)}`}
          color={grey}
        />
        <Typography
          variant="Body20/semiBold"
          lineHeight={'30px'}
          children={<Message name={name} workMessage={workMsg(isWorking)} />}
        />

        {isWorking && (
          <Stack
            direction={'row'}
            padding={'20px 24px'}
            gap={13}
            sx={{ backgroundColor: blgrey, borderRadius: 1 }}
          >
            <Stack gap={0.5}>
              <Typography
                variant="Body14/regular"
                color={grey}
                children={'운동시작'}
              />
              <Typography variant="Body20/bold" children={'11:01'} />
            </Stack>
            <Stack gap={0.5}>
              <Typography
                variant="Body14/regular"
                color={grey}
                children={'총 운동 시간'}
              />

              <Typography variant="Body20/bold" children={'0시간 0분'} />
            </Stack>
          </Stack>
        )}
        <Button
          color="primary"
          typoVariant={'Body18/semiBold'}
          size="large"
          variant={!isWorking ? 'contained' : 'outlined'}
          children={!isWorking ? '운동시작' : '운동종료'}
          sx={{ marginTop: 2, marginBottom: '-12px' }}
          onClick={toggleWorkingState}
        />
      </Wrap>
      <Wrap gap={1.5} sx={{ padding: '0 !important' }}>
        <Typography
          variant="Body18/bold"
          children={'오늘의 알림'}
          sx={{ padding: '32px 20px 0' }}
        />
        <Divider></Divider>
        {!alaram ? (
          <Typography
            variant="Body16/regular"
            color={grey}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: blgrey,
              py: 1.5,
              margin: '12px 20px 32px',
              borderRadius: 1
            }}
            children={'알림 내용이 없습니다.'}
          />
        ) : (
          <ReservationCard
            date={dayjs()}
            chipLabel="warning"
            layoutSx={{ padding: '8px 20px 32px' }}
          />
        )}
      </Wrap>
    </Stack>
  );
}
