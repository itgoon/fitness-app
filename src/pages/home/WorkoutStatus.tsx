import { useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Button from '../../components/Button';
import {
  DateFormat,
  MontFormatKR,
  TimeDateFormat
} from '../../utils/formatTime';
import { IState } from './types';
import TimeCard from './TimeCard';
import Wrap from '../../components/custom/Wrap';
import TimePicker from '../../components/custom/TimePicker';

const name = '홍길동';
const EMPTY_TIME = '00:00';
const INITIAL_TIME = '0시간 0분';

export default function WorkoutStatus() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey = light ? palette.grey[500] : palette.grey[600];
  const today = dayjs().format(MontFormatKR);

  const [state, setState] = useState<IState>({
    isWorking: false,
    isStart: false,
    isEnd: false,
    startTime: EMPTY_TIME,
    endTime: EMPTY_TIME,
    totalTime: INITIAL_TIME
  });

  const { isWorking, isStart, isEnd, startTime, endTime, totalTime } = state;

  const toggleWorkingState = () => {
    setState((prev) => ({ ...prev, isWorking: !prev.isWorking }));
  };

  const handleTimer = (type: string) => {
    setState((prev) => ({ ...prev, [type]: true }));
  };

  const handleTimeChange = (value: string) => {
    const formattedValue = value ? dayjs(value).format('HH:mm') : EMPTY_TIME;
    state.isStart
      ? setState((prev) => ({ ...prev, startTime: formattedValue }))
      : setState((prev) => ({ ...prev, endTime: formattedValue }));
  };

  const calculatedTotlaTime = (start: string, end: string) => {
    const _startTime = dayjs(`${today} ${start}`, TimeDateFormat);
    const _endTime = dayjs(`${today} ${end}`, TimeDateFormat);
    const totalMinutes = _endTime.diff(_startTime, 'minute');
    const total =
      totalMinutes > 0
        ? `${Math.floor(totalMinutes / 60)} 시간 ${totalMinutes % 60} 분`
        : '0시간 0분';

    setState((prev) => ({ ...prev, totalTime: total }));
  };

  const saveWorkTime = () => {
    isStart
      ? setState((prev) => ({ ...prev, isStart: false }))
      : setState((prev) => ({ ...prev, isEnd: false }));
    if (startTime !== EMPTY_TIME && endTime !== EMPTY_TIME)
      calculatedTotlaTime(startTime, endTime);
  };

  return (
    <Wrap gap={1} padding={4}>
      <Typography variant="Body18/semiBold" color={grey}>
        {today}
      </Typography>

      <Typography variant="Body20/semiBold" lineHeight="30px">
        <span>{name} 님,</span>
        <br />
        <span>
          {isWorking
            ? '오늘도 목표를 향해 같이 달려가봐요'
            : '오늘 운동을 시작하지 않으셨네요!'}
        </span>
      </Typography>

      {isWorking && (
        <TimeCard state={state} onClick={handleTimer} totalTime={totalTime} />
      )}

      {isWorking ? (
        <Button
          color="primary"
          typoVariant="Body18/semiBold"
          size="large"
          sx={{ marginTop: 2, marginBottom: '-12px' }}
          onClick={toggleWorkingState}
          variant="outlined"
        >
          운동종료
        </Button>
      ) : (
        <Button
          color="primary"
          typoVariant="Body18/semiBold"
          size="large"
          sx={{ marginTop: 2, marginBottom: '-12px' }}
          onClick={toggleWorkingState}
          variant="contained"
        >
          운동시작
        </Button>
      )}

      <TimePicker
        open={isStart || isEnd}
        onClose={() => {
          setState((prev) => ({ ...prev, isStart: false, isEnd: false }));
        }}
        title={
          isStart
            ? '운동 시작 시간을 선택해주세요'
            : '운동 종료 시간을 선택해주세요'
        }
        onClick={saveWorkTime}
        onChange={handleTimeChange}
      />
    </Wrap>
  );
}
