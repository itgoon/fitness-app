import { Stack, Typography, useTheme } from '@mui/material';
import EmptyCard from '../../components/custom/customCard/EmptyCard';
import { IState } from './types';
import { useState } from 'react';
import TimeCard from './TimeCard';

interface ITimeCard {
  state: IState;
  onClick: (arg: string) => void;
  totalTime: string;
}

export default function Card({ state, onClick, totalTime }: ITimeCard) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const grey = light ? palette.grey[500] : palette.grey[600];

  const [isWorkingEnd, setIsWorkingEnd] = useState(false);

  const { startTime, endTime } = state;

  const renderTimeSection = (
    label: string,
    time: string,
    clickAction: string
  ) => (
    <Stack gap={0.5} onClick={() => onClick(clickAction)}>
      <Typography variant="Body14/regular" color={grey}>
        {label}
      </Typography>
      <Typography variant="Body20/bold" color={grey900}>
        {time}
      </Typography>
    </Stack>
  );

  return (
    <>
      {isWorkingEnd ? (
        <>
          <EmptyCard
            direction="row"
            justifyContent="start"
            padding="24px"
            gap={13}
          >
            {renderTimeSection('운동시작', startTime, 'isStart')}
            {renderTimeSection(' 총 운동 시간', totalTime, 'isEnd')}
          </EmptyCard>
        </>
      ) : (
        <TimeCard />
      )}
    </>
  );
}
