import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface IDietTab {
  children: ReactNode;
}
export default function DietTab({ children }: IDietTab) {
  return (
    <Stack height={'inherit'} overflow={'auto'} gap={1.5}>
      {children}
    </Stack>
  );
}
