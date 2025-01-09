import { useEffect, useState } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Button from '../../components/Button';
import { MontFormatKR, TimeDateFormat } from '../../utils/formatTime';
import { IState } from './types';
import Wrap from '../../components/custom/Wrap';
import TimePicker from '../../components/custom/TimePicker';
import TimerCard from './TimerCard';
import TimeCard from './TimeCard';

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
    isWorkingEnd: false,
    startTime: EMPTY_TIME,
    endTime: EMPTY_TIME,
    totalTime: 0
  });

  const [isTimePicker, setIsTimePicker] = useState({
    isStart: false,
    isEnd: false
  });

  const { isWorking, isWorkingEnd, startTime, endTime, totalTime } = state;
  const { isStart, isEnd } = isTimePicker;

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isWorking) {
      const startTimeValue = dayjs();
      setState((prevState) => ({
        ...prevState,
        startTime: startTimeValue.format('HH:mm')
      }));

      timer = setInterval(() => {
        const elapsedTime = Math.floor(
          (dayjs().valueOf() - startTimeValue.valueOf()) / 1000
        );
        setState((prev) => ({ ...prev, totalTime: elapsedTime }));
      }, 1000);
    } else {
      const endTime = dayjs().format('HH:mm');
      setState((prevState) => ({
        ...prevState,
        endTime: endTime
      }));

      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWorking]);

  const toggleWorkingState = () => {
    setState((prevState) => ({
      ...prevState,
      isWorking: !prevState.isWorking
    }));
  };

  const handleTimer = (type: string) => {
    setState((prev) => ({ ...prev, [type]: true }));
  };

  const handleTimeChange = (value: string) => {
    const formattedValue = value ? dayjs(value).format('HH:mm') : EMPTY_TIME;
    isStart
      ? setIsTimePicker((prev) => ({ ...prev, startTime: formattedValue }))
      : setIsTimePicker((prev) => ({ ...prev, endTime: formattedValue }));
  };

  const calculatedTotlaTime = (start: string, end: string) => {
    const _startTime = dayjs(`${today} ${start}`, TimeDateFormat);
    const _endTime = dayjs(`${today} ${end}`, TimeDateFormat);
    const totalMinutes = _endTime.diff(_startTime, 'minute');

    setState((prev) => ({ ...prev, totalTime: totalMinutes }));
  };

  const saveWorkTime = () => {
    isStart
      ? setIsTimePicker((prev) => ({ ...prev, isStart: false }))
      : setIsTimePicker((prev) => ({ ...prev, isEnd: false }));
    if (startTime !== EMPTY_TIME && endTime !== EMPTY_TIME)
      calculatedTotlaTime(startTime, endTime);
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}시간 ${minutes}분`;
  };

  const formatTotalTime = formatTime(totalTime);
  return (
    <Wrap gap={1} sx={{ padding: '32px 20px 20px' }}>
      <Typography variant="Body18/semiBold" color={grey}>
        {today}
      </Typography>

      <Stack gap={2.5}>
        <Typography variant="Body20/semiBold" lineHeight="30px">
          <span>{name} 님,</span>
          <br />
          <span>
            {isWorking
              ? '오늘도 목표를 향해 같이 달려가봐요'
              : '오늘 운동을 시작하지 않으셨네요!'}
          </span>
        </Typography>

        {isWorking && !isWorkingEnd && (
          <>
            <TimerCard
              state={state}
              onClick={handleTimer}
              totalTime={formatTotalTime}
            />
            <Button
              color="primary"
              typoVariant="Body18/semiBold"
              size="large"
              onClick={() =>
                setState((prev) => ({ ...prev, isWorkingEnd: true }))
              }
              variant="outlined"
            >
              운동종료
            </Button>
          </>
        )}

        {isWorkingEnd && (
          <TimeCard
            state={state}
            onClick={handleTimer}
            totalTime={formatTotalTime}
          />
        )}

        {!isWorking && (
          <Button
            color="primary"
            typoVariant="Body18/semiBold"
            size="large"
            onClick={toggleWorkingState}
            sx={{ marginTop: 0.5 }}
            variant="contained"
          >
            운동시작
          </Button>
        )}
      </Stack>

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
