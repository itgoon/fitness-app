import { Stack, useTheme } from '@mui/material';
import RenderText from './RenderText';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';

interface ITimeCard {
  startTime: string;
  endTime: string;
  onClick: (arg: string) => void;
  totalTime: number;
}

const formatTimerTime = (totalMinuetes: number) => {
  const hours = Math.floor(totalMinuetes / 60);
  const minutes = totalMinuetes % 60;
  return `${hours}시간 ${minutes}분`;
};

export default function EndTimerCard({
  startTime,
  endTime,
  onClick,
  totalTime
}: ITimeCard) {
  const formatedTime = formatTimerTime(totalTime);
  return (
    <EmptyCard direction="row" justifyContent="start" padding="24px" gap={13}>
      <Stack gap={2}>
        <RenderText
          label="운동시작"
          time={startTime}
          onClick={() => onClick('isStart')}
        />

        <RenderText
          label="운동종료"
          time={endTime}
          onClick={() => onClick('isEnd')}
        />
      </Stack>

      <Stack gap={0.5}>
        <RenderText label="총 운동 시간" time={formatedTime} />
      </Stack>
    </EmptyCard>
  );
}
