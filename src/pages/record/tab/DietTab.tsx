import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface IDietTab {
  children: ReactNode;
}

/**
 * ******************************************************
 * 기록 화면 => 식단 탭
 * ******************************************************
 */

export default function DietTab({ children }: IDietTab) {
  return (
    <Stack padding={2} gap={3}>
      {children}
    </Stack>
  );
}
