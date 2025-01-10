import { Typography, useTheme } from '@mui/material';
import EmptyCard from '../../../../components/custom/customCard/EmptyCard';

export default function EmptyReservationData() {
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
        아직 예약 내역이 없어요.
      </Typography>
    </EmptyCard>
  );
}
