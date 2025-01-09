import { Stack, Typography, useTheme } from '@mui/material';
import EmptyCard from '../../components/custom/customCard/EmptyCard';
import { IState } from '.';

interface ITimeCard {
  state: IState;
  onClick: (arg: string) => void;
  totalTime: string;
}

export default function TimeCard({ state, onClick, totalTime }: ITimeCard) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const grey = light ? palette.grey[500] : palette.grey[600];

  const { isWorking, startTime, endTime } = state;
  if (!isWorking) return null;

  const renderTimeSection = (
    label: string,
    time: string,
    clickAction: string
  ) => {
    return (
      <Stack gap={0.5} onClick={() => onClick(clickAction)}>
        <Typography variant="Body14/regular" color={grey}>
          {label}
        </Typography>
        <Typography variant="Body20/bold" color={grey900}>
          {time}
        </Typography>
      </Stack>
    );
  };

  return (
    <EmptyCard direction="row" justifyContent="start" padding="24px" gap={13}>
      <Stack gap={2}>
        {renderTimeSection('운동시작', startTime, 'isStart')}

        {renderTimeSection('운동종료', endTime, 'isEnd')}
      </Stack>

      <Stack gap={0.5}>
        <Typography variant="Body14/regular" color={grey}>
          총 운동 시간
        </Typography>

        <Typography variant="Body20/bold" color={grey900}>
          {totalTime}
        </Typography>
      </Stack>
    </EmptyCard>
  );
}
