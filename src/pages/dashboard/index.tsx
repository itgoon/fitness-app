import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

import { Divider, Stack, Typography, useTheme } from '@mui/material';
import WeekCalendar from '../../components/WeekCalendar';
import { useState } from 'react';
import Button from '../../components/Button';
import Wrap from './wrap/Wrap';
import { MontFormatKR } from '../../utils/formatTime';
import ReservationCard from '../../components/reservationCard/ReservationCard';
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

export default function DashboardPage() {
  const [date, setDate] = useState(dayjs());
  const theme = useTheme();
  const grey = theme.palette.grey[500];
  const blgrey = theme.palette.grey.A200;

  const [isWorking, setIsWorking] = useState(false);
  const [alaram, setAlaram] = useState(false);

  return (
    <Stack>
      <Wrap padding={'0 !important'}>
        <WeekCalendar date={date} monthCount={dummyMonthCount} />
      </Wrap>

      <Wrap gap={1} padding={4}>
        <Typography
          variant="Body18/semiBold"
          children={`${date.format(MontFormatKR)} ${date.format('dddd')}`}
          color={grey}
        />

        <Typography
          variant="Body20/semiBold"
          lineHeight={'30px'}
          dangerouslySetInnerHTML={{
            __html: `${name}님,<br/> ${workMsg(isWorking)}`
          }}
        />

        {isWorking && (
          <Stack
            direction={'row'}
            padding={'20px 24px'}
            gap={13}
            sx={{ backgroundColor: blgrey, borderRadius: 1 }}
          >
            <Stack gap={0.5}>
              <Typography variant="Body14/regular" color={grey}>
                운동시작
              </Typography>
              <Typography variant="Body20/bold">11:01</Typography>
            </Stack>
            <Stack gap={0.5}>
              <Typography variant="Body14/regular" color={grey}>
                총 운동 시간
              </Typography>
              <Typography variant="Body20/bold">0시간 0분</Typography>
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
          onClick={() => {
            setIsWorking(!isWorking);
            setAlaram(!alaram);
          }}
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
            date={date}
            chipLabel="warning"
            layoutSx={{ padding: '8px 20px 32px' }}
          />
        )}
      </Wrap>
    </Stack>
  );
}
