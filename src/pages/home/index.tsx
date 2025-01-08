import dayjs from 'dayjs';

import {  Stack, Typography, useTheme } from '@mui/material';
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
import {
  dummyMonthCount1,
  dummyMonthCount2,
} from '../../utils/dummy';
import Wrap from './Wrap';
import WorkoutData from './WorkoutData';
import Bottom from './Bottom';
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

const workMsg = (isWorking: boolean) =>
  isWorking
    ? '오늘도 목표를 향해 같이 달려가봐요'
    : '오늘 운동을 시작하지 않으셨네요!';

const Message = ({ userName, workMessage }: any) => (
  <>
    <span>{userName} 님,</span>
    <br />
    <span>{workMessage}</span>
  </>
);

export default function HomePage() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey = light ? palette.grey[500] : palette.grey[600];

  const today = dayjs().format(MontFormatKR)

  const [state, setState] = useState({
    isWorking: false,
    isAlarm: false,
    isStart: false,
    isEnd: false,
    startTime: EMPTY_TIME,
    endTime: EMPTY_TIME
  });
  const { isWorking, isAlarm, isStart, isEnd, startTime, endTime } = state;

  const [totalTime, setTotalTime] = useState(INITIAL_TIME);

  const toggleWorkingState = () => {
    setState((prev) => ({
      ...prev,
      isWorking: !prev.isWorking,
      isAlarm: !prev.isAlarm
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
    const today = dayjs().format(DateFormat);

    const _startTime = dayjs(`${today} ${start}`, TimeDateFormat);
    const _endTime = dayjs(`${today} ${end}`, TimeDateFormat);
    const totalMinutes = _endTime.diff(_startTime, 'minute');
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
        <WeekCalendar  greenBadge={dummyMonthCount1}  orangeBadge={dummyMonthCount2} />
      </Wrap>

      <Wrap gap={1} padding={4}>
        
        <Typography variant="Body18/semiBold" color={grey}>{today} </Typography>
        
        <Typography  variant="Body20/semiBold" lineHeight="30px" > 
          {<Message userName={name} workMessage={workMsg(state.isWorking)} />}
        </Typography>

        <WorkoutData state={state} onClick={handleTimer} totalTime={totalTime}/>

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

      <Bottom isAlarm={isAlarm} />
      
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
