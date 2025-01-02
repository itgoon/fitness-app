import { Stack, Typography, useTheme } from '@mui/material';
import Icon from '../../Icon';
import EmptyCard from '../customCard/EmptyCard';

export default function WorkoutCard() {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey400 = palette.grey[400];
  const blgrey = light ? palette.grey.A200 : grey400;
  return (
    <Stack gap={1.5}>
      <Typography children={'9월 18일 수요일'} />
      <EmptyCard>
        <Icon name="Green" size={60} />

        <Stack>
          <Typography children={'19:10 ~ 20:00'} />
          <Typography children={'72kg'} />
        </Stack>
      </EmptyCard>
    </Stack>
  );
}
