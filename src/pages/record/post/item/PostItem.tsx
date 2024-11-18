import { Stack, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface ItemProps {
  label: string;
  children: ReactNode;
}
export default function PostItem({ label, children }: ItemProps) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : palette.common.white;
  return (
    <Stack gap={1.5}>
      <Typography
        variant={'Body14/semiBold'}
        color={grey900}
        children={label}
      />
      {children}
    </Stack>
  );
}
