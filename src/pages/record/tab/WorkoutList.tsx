import { Stack, Typography, useTheme } from '@mui/material';

export default function WorkoutList() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const primarylig = palette.primary.light;
  return (
    <Stack
      height={'inherit'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={1.5}
    >
      <Typography
        color={primarylig}
        variant={'Body16/light'}
        children={' 운동 기록 '}
      />
    </Stack>
  );
}
