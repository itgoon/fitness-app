import { Stack, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface IDietTab {
  children: ReactNode;
}

export default function WorkoutTab({ children }: IDietTab) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const primarylig = palette.primary.light;
  return (
    <Stack padding={2} height={'inherit'} overflow={'auto'} gap={1.5}>
      {children}
    </Stack>
  );
}
