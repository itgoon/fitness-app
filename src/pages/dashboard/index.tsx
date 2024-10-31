import dayjs from 'dayjs';

import { Divider, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import Button from '../../components/Button';
import {
  DateFormat,
  MontFormatKR,
  TimeDateFormat
} from '../../utils/formatTime';
import TimePicker from '../../components/custom/TimePicker';
import WeekCalendar from '../../components/custom/WeekCalendar';
import AlaramCard from '../../components/custom/AlaramCard';
import ReservationCard from '../../components/custom/reservationCard/ReservationCard';
import { useNavigate } from 'react-router';
import EmptyCard from '../../components/custom/customCard/EmptyCard';
import { dummyReservaitonListCard } from '../../utils/dummy';
import Wrap from './Wrap';
/**
 * ******************************************************
 * 대시보드 화면
 * ******************************************************
 */

const dummyMonthCount1 = [{ date: '2024-10-18', count: 1 }];
const dummyMonthCount2 = [{ date: '2024-10-19', count: 1 }];
const dummyCardData = [
  { label: '센터명', value: '리온짐' },
  { label: '요청 일시', value: '2024년 9월 1일 12시 00분' },
  { label: '작성 기한', value: '2024년 9월 3일 11시 59분' }
];
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
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey900 = light ? theme.palette.grey[900] : 'white';
  const grey400 = palette.grey[400];
  const grey = light ? palette.grey[500] : palette.grey[600];
  const blgrey = light ? palette.grey.A200 : grey400;

  const navigate = useNavigate();

  const [isWorking, setIsWorking] = useState(false);
  const [alaram, setAlaram] = useState(false);

  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [startValue, setStartValue] = useState('00:00');
  const [endValue, setEndValue] = useState('00:00');
  const [totalTime, setTotalTime] = useState('0시간 0분');

  const toggleWorkingState = () => {
    setIsWorking((prev) => !prev);
    setAlaram((prev) => !prev);
  };

  const handleTimeChange = (value) => {
    value = value ? dayjs(value).format('HH:mm') : '00:00';
    if (isStart) {
      setStartValue(value);
    } else {
      setEndValue(value);
    }
  };

  const saveWorkTime = () => {
    if (isStart) {
      setIsStart((prev) => !prev);
    } else {
      setIsEnd((prev) => !prev);
    }
    if (startValue !== '00:00' && endValue !== '00:00') {
      const today = dayjs().format(DateFormat); // 오늘 날짜 더해서 파싱

      const startTime = dayjs(`${today} ${startValue}`, TimeDateFormat);
      const endTime = dayjs(`${today} ${endValue}`, TimeDateFormat);
      const total = endTime.diff(startTime, 'minute');
      const hours = Math.floor(total / 60);
      const min = total % 60;
      setTotalTime(`${hours} 시간 ${min} 분`);
    }
  };

  return (
    <Stack>
      <Wrap padding={'0 !important'}>
        <WeekCalendar
          date={dayjs()}
          greenBadge={dummyMonthCount1}
          orangeBadge={dummyMonthCount2}
        />
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
          // padding 20 / 24
          <EmptyCard
            direction={'row'}
            justifyContent={'start'}
            padding={'24px'}
            gap={13}
          >
            <Stack gap={2}>
              <Stack gap={0.5} onClick={() => setIsStart((prev) => !prev)}>
                <Typography
                  variant="Body14/regular"
                  color={grey}
                  children={'운동시작'}
                />
                <Typography
                  variant="Body20/bold"
                  children={startValue}
                  color={grey900}
                />
              </Stack>
              <Stack gap={0.5} onClick={() => setIsEnd((prev) => !prev)}>
                <Typography
                  variant="Body14/regular"
                  color={grey}
                  children={'운동종료'}
                />
                <Typography
                  variant="Body20/bold"
                  children={endValue}
                  color={grey900}
                />
              </Stack>
            </Stack>
            <Stack gap={0.5}>
              <Typography
                variant="Body14/regular"
                color={grey}
                children={'총 운동 시간'}
              />

              <Typography
                variant="Body20/bold"
                children={totalTime}
                color={grey900}
              />
            </Stack>
          </EmptyCard>
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
          color={grey900}
        />
        <Divider></Divider>
        {!alaram ? (
          <EmptyCard
            margin={'12px 20px 32px'}
            children={'알림 내용이 없습니다.'}
          />
        ) : (
          <>
            <AlaramCard
              isEmpty={false}
              title="새로운 서명요청이 있습니다!"
              dataList={dummyCardData}
              onClick={() => navigate('/contract')}
              onClickMsg="서명하기"
            />
            <ReservationCard cardData={dummyReservaitonListCard[0]} />
          </>
        )}
      </Wrap>
      <TimePicker
        open={isStart || isEnd}
        onClose={() => {
          setIsStart(false);
          setIsEnd(false);
        }}
        title={
          isStart
            ? '운동 시작 시간을 선택해주세요'
            : '운동 종료 시간을 선택해주세요'
        }
        onClick={saveWorkTime}
        onChange={handleTimeChange}
      ></TimePicker>
    </Stack>
  );
}
