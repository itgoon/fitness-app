import dayjs from 'dayjs';

import { Divider, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
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
import EmptyCard from '../../components/custom/customCard/EmptyCard';
import {
  dummyCardData,
  dummyMonthCount1,
  dummyMonthCount2,
  dummyReservaitonListCard
} from '../../utils/dummy';
import Wrap from './Wrap';
/**
 * ******************************************************
 * 대시보드 화면
 * 기획 설명 추가 필요
 * 운동 시작 버튼을 누른 경우 운동 종료 시간을 누른 경우는 타이머 설정을 할 것인지?
 * 운동 종료를 누른 경우 해당 정보를 화면에 그대로 노출 시키는지?
 * ******************************************************
 */

const EMPTY_TIME = '00:00';
const INITIAL_TIME = '0시간 0분';
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

const renderWorkoutInfo = ({
  state,
  totalTime,
  grey,
  grey900,
  handleTimer
}) => {
  const { isWorking, startTime, endTime } = state;

  if (!isWorking) return null;
  return (
    <EmptyCard
      direction="row"
      justifyContent="start"
      padding="24px"
      gap={13}
    >
      <Stack gap={2}>
        <Stack gap={0.5} onClick={() => handleTimer('isStart')}>
          <Typography
            variant="Body14/regular"
            color={grey}
            children="운동시작"
          />
          <Typography
            variant="Body20/bold"
            children={startTime}
            color={grey900}
          />
        </Stack>
        <Stack gap={0.5} onClick={() => handleTimer('isEnd')}>
          <Typography
            variant="Body14/regular"
            color={grey}
            children="운동종료"
          />
          <Typography
            variant="Body20/bold"
            children={endTime}
            color={grey900}
          />
        </Stack>
      </Stack>
      <Stack gap={0.5}>
        <Typography
          variant="Body14/regular"
          color={grey}
          children="총 운동 시간"
        />
        <Typography
          variant="Body20/bold"
          children={totalTime}
          color={grey900}
        />
      </Stack>
    </EmptyCard>
  );
};

export default function HomePage() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const grey400 = palette.grey[400];
  const grey = light ? palette.grey[500] : palette.grey[600];
  const blgrey = light ? palette.grey.A200 : grey400;

  const navigate = useNavigate();

  const [state, setState] = useState({
    isWorking: false,
    isAlaram: false,
    isStart: false,
    isEnd: false,
    startTime: EMPTY_TIME,
    endTime: EMPTY_TIME
  });
  const { isWorking, isAlaram, isStart, isEnd, startTime, endTime } = state;

  const [totalTime, setTotalTime] = useState(INITIAL_TIME);

  const toggleWorkingState = () => {
    setState((prev) => ({
      ...prev,
      isWorking: !prev.isWorking,
      isAlaram: !prev.isAlaram
    }));
  };

  const handleTimeChange = (value: string) => {
    const formattedValue = value ? dayjs(value).format('HH:mm') : EMPTY_TIME;
    state.isStart
      ? setState((prev) => ({ ...prev, startTime: formattedValue }))
      : setState((prev) => ({ ...prev, endTime: formattedValue }));
  };
  const handleTimer = (type: string) => {
    setState((prev) => ({ ...prev, [type]: true }));
  };

  const calculatedTotlaTime = (start: string, end: string) => {
    const today = dayjs().format(DateFormat); // 오늘 날짜 더해서 파싱

    const startTime = dayjs(`${today} ${start}`, TimeDateFormat);
    const endTime = dayjs(`${today} ${end}`, TimeDateFormat);
    const totalMinutes = endTime.diff(startTime, 'minute');
    const total =
      totalMinutes > 0
        ? `${Math.floor(totalMinutes / 60)} 시간 ${totalMinutes % 60} 분`
        : '0시간 0분';
    setTotalTime(total);
  };
  const saveWorkTime = () => {
    isStart
      ? setState((prev) => ({ ...prev, isStart: false }))
      : setState((prev) => ({ ...prev, isEnd: false }));
    if (startTime !== EMPTY_TIME && endTime !== EMPTY_TIME)
      calculatedTotlaTime(startTime, endTime);
  };

  return (
    <Stack>
      <Wrap padding="0 !important">
        <WeekCalendar
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
          lineHeight="30px"
          children={
            <Message name={name} workMessage={workMsg(state.isWorking)} />
          }
        />

        {/* 운동 시간 데이터 */}
        {renderWorkoutInfo({ state, totalTime, grey, grey900, handleTimer })}

        {/* 버튼 color primary일때, alpha 색 들어가는거 막기  */}
        <Button
          color="primary"
          typoVariant="Body18/semiBold"
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
          children="오늘의 알림"
          sx={{ padding: '32px 20px 0' }}
          color={grey900}
        />
        <Divider />
        {!isAlaram ? (
          <EmptyCard
            margin="12px 20px 32px"
            children="알림 내용이 없습니다."
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
          setState((prev) => ({ ...prev, isStart: true, isEnd: true }));
        }}
        title={
          isStart
            ? '운동 시작 시간을 선택해주세요'
            : '운동 종료 시간을 선택해주세요'
        }
        onClick={saveWorkTime}
        onChange={handleTimeChange}
      />
    </Stack>
  );
}
