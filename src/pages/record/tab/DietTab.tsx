import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface IDietTab {
  children: ReactNode;
}
export default function DietTab({ children }: IDietTab) {
  return (
    <Stack padding={2} gap={3}>
      {children}
    </Stack>
  );
}
