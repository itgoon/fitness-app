import dayjs from 'dayjs';

import { Stack } from '@mui/material';
import { useState } from 'react';
import { DateFormat, TimeDateFormat } from '../../utils/formatTime';
import TimePicker from '../../components/custom/TimePicker';
import WeekCalendar from '../../components/custom/WeekCalendar';
import { dummyMonthCount1, dummyMonthCount2 } from '../../utils/dummy';
import Wrap from './Wrap';
import Notification from './Notification';
import WorkoutStatus from './WorkoutStatus';
import { IState } from './types';

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

export default function HomePage() {
  const [state, setState] = useState<IState>({
    isWorking: false,
    isAlarm: false,
    isStart: false,
    isEnd: false,
    startTime: EMPTY_TIME,
    endTime: EMPTY_TIME
  });

  const { isAlarm, isStart, isEnd, startTime, endTime } = state;

  const [totalTime, setTotalTime] = useState(INITIAL_TIME);

  const handleTimeChange = (value: string) => {
    const formattedValue = value ? dayjs(value).format('HH:mm') : EMPTY_TIME;
    state.isStart
      ? setState((prev) => ({ ...prev, startTime: formattedValue }))
      : setState((prev) => ({ ...prev, endTime: formattedValue }));
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
        <WeekCalendar
          greenBadge={dummyMonthCount1}
          orangeBadge={dummyMonthCount2}
        />
      </Wrap>

      <WorkoutStatus state={state} setState={setState} totalTime={totalTime} />

      <Notification isAlarm={isAlarm} />

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
    </Stack>
  );
}
