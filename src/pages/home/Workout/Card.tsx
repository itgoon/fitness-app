import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateReqFormat } from 'src/utils/formatTime';
import TimePicker from '../../../components/custom/TimePicker';
import StartTimerCard from './StartTimerCard';
import EndTimerCard from './EndTimerCard';
import WeightDrawer from './WeightDrawer';

interface ICard {
  isWorking: boolean;
}

const EMPTY_TIME = '00:00';

export default function Card({ isWorking }: ICard) {
  const [isWorkingEnd, setIsWorkingEnd] = useState(false);

  const [timerState, setTimerState] = useState({
    startTime: EMPTY_TIME,
    endTime: EMPTY_TIME,
    totalTime: 0
  });

  const [isTimePicker, setIsTimePicker] = useState({
    isStart: false,
    isEnd: false
  });

  const [weightModalisOpen, setWeightModalIsOpen] = useState(false);

  const { startTime, endTime, totalTime } = timerState;
  const { isStart, isEnd } = isTimePicker;

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isWorking && !isWorkingEnd) {
      const startTimeValue = dayjs();
      setTimerState((prevState) => ({
        ...prevState,
        startTime: startTimeValue.format('HH:mm')
      }));

      timer = setInterval(() => {
        const elapsedTime = Math.floor(
          (dayjs().valueOf() - startTimeValue.valueOf()) / 1000
        );
        setTimerState((prev) => ({ ...prev, totalTime: elapsedTime }));
      }, 1000);
    } else {
      const _endTime = dayjs().format('HH:mm');
      setTimerState((prevState) => ({
        ...prevState,
        _endTime
      }));

      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWorking, isWorkingEnd]);

  const handleTimer = (type: string) => {
    setIsTimePicker((prev) => ({ ...prev, [type]: true }));
  };

  const handleTimeChange = (value: string) => {
    const formattedValue = value ? dayjs(value).format('HH:mm') : EMPTY_TIME;
    isStart
      ? setTimerState((prev) => ({ ...prev, startTime: formattedValue }))
      : setTimerState((prev) => ({ ...prev, endTime: formattedValue }));
  };

  const calculatedTotlaTime = (start: string, end: string) => {
    const todayFormatted = dayjs().format(DateReqFormat);
    const _startTime = dayjs(`${todayFormatted} ${start}`, 'YYYY-MM-DD HH:mm');
    const _endTime = dayjs(`${todayFormatted} ${end}`, 'YYYY-MM-DD HH:mm');
    const totalMinutes = _endTime.diff(_startTime, 'minute');

    setTimerState((prev) => ({ ...prev, totalTime: totalMinutes }));
  };

  const saveWorkTime = () => {
    isStart
      ? setIsTimePicker((prev) => ({ ...prev, isStart: false }))
      : setIsTimePicker((prev) => ({ ...prev, isEnd: false }));
    calculatedTotlaTime(startTime, endTime);
  };

  return (
    <>
      {!isWorkingEnd ? (
        <StartTimerCard
          startTime={startTime}
          totalTime={totalTime}
          onHandleEnd={() => {
            setIsWorkingEnd(true);
            setWeightModalIsOpen(true);
          }}
        />
      ) : (
        <EndTimerCard
          onClick={handleTimer}
          startTime={startTime}
          endTime={endTime}
          totalTime={totalTime}
        />
      )}

      <TimePicker
        open={isStart || isEnd}
        onClose={() => {
          setIsTimePicker((prev) => ({
            ...prev,
            isStart: false,
            isEnd: false
          }));
        }}
        title={
          isStart
            ? '운동 시작 시간을 선택해주세요'
            : '운동 종료 시간을 선택해주세요'
        }
        onClick={saveWorkTime}
        onChange={handleTimeChange}
      />

      <WeightDrawer
        isOpen={weightModalisOpen}
        onClose={() => setWeightModalIsOpen(false)}
      />
    </>
  );
}
