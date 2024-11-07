import { Stack, Typography, useTheme } from '@mui/material';

export default function DietList() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  return (
    <Stack
      height={'inherit'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={1.5}
    >
      <Typography
        color={'#2962FF'}
        variant={'Body16/light'}
        children={'식단 기록'}
      />
    </Stack>
  );
}
