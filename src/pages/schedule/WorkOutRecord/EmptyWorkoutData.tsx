import { Typography, useTheme } from '@mui/material';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
export default function EmptyWorkoutData() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey = palette.grey[500];
  return (
    <EmptyCard>
      <Typography
        variant="Body16/regular"
        lineHeight="24px"
        color={light ? grey : 'white'}
      >
        운동 기록을 찾을 수 없어요 <br /> 오늘부터 기록을 채워보세요.
      </Typography>
    </EmptyCard>
  );
}
