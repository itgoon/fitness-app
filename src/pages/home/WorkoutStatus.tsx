import { Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Button from '../../components/Button';
import Wrap from './Wrap';
import { MontFormatKR } from '../../utils/formatTime';
import { IState } from './types';
import TimeCard from './TimeCard';

interface IWorkoutStatus {
  state: IState;
  totalTime: string;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}
const name = '홍길동';

export default function WorkoutStatus({
  state,
  setState,
  totalTime
}: IWorkoutStatus) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey = light ? palette.grey[500] : palette.grey[600];
  const today = dayjs().format(MontFormatKR);

  const { isWorking } = state;

  const toggleWorkingState = () => {
    setState((prev) => ({
      ...prev,
      isWorking: !prev.isWorking,
      isAlarm: !prev.isAlarm
    }));
  };

  const handleTimer = (type: string) => {
    setState((prev) => ({ ...prev, [type]: true }));
  };

  const renderButton = () => {
    const buttonProps = {
      color: 'primary',
      typoVariant: 'Body18/semiBold',
      size: 'large',
      sx: { marginTop: 2, marginBottom: '-12px' },
      onClick: toggleWorkingState
    } as const;

    return isWorking ? (
      <Button {...buttonProps} variant="outlined" children="운동종료" />
    ) : (
      <Button {...buttonProps} variant="contained" children="운동시작" />
    );
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

      <TimeCard state={state} onClick={handleTimer} totalTime={totalTime} />

      {renderButton()}
    </Wrap>
  );
}
