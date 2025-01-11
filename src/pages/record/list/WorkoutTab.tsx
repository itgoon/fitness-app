import { Stack } from '@mui/material';
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
  return <Stack gap={1.5}>{children}</Stack>;
}
