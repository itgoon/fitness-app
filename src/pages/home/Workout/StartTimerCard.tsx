import Button from '../../../components/Button';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import RenderText from './RenderText';

interface ITimeCard {
  startTime: string;
  totalTime: number;
  onHandleEnd: () => void;
}

const formatTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}시간 ${minutes}분`;
};

export default function StartTimerCard({
  startTime,
  totalTime,
  onHandleEnd
}: ITimeCard) {
  const formattedTime = formatTime(totalTime);

  return (
    <>
      <EmptyCard direction="row" justifyContent="start" padding="24px" gap={13}>
        <RenderText label="운동시작" time={startTime} />

        <RenderText label="총 운동 시간" time={formattedTime} />
      </EmptyCard>

      <Button
        color="primary"
        typoVariant="Body18/semiBold"
        size="large"
        variant="outlined"
        onClick={onHandleEnd}
      >
        운동종료
      </Button>
    </>
  );
}
