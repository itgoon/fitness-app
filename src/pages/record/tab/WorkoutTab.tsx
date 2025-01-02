import { Stack, useTheme } from '@mui/material';
import { ReactNode } from 'react';
interface IDietTab {
  children: ReactNode;
}

/**
 * ******************************************************
 * 기록 화면 => 운동 탭
 * ******************************************************
 */
export default function WorkoutTab({ children }: IDietTab) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const primarylig = palette.primary.light;
  return (
    <Stack padding={2} gap={1.5}>
      {children}
    </Stack>
  );
}
