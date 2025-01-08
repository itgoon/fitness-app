import { Stack, Typography } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

interface HeaderProps {
  left: ReactNode;
  right: ReactNode;
}

export default function Header({
  children,
  left,
  right
}: PropsWithChildren<HeaderProps>) {
  return (
    <Stack justifyContent={'space-between'} sx={{ height: 56 }}>
      {left}
      <Typography variant="Body18/bold">{children}</Typography>
      {right}
    </Stack>
  );
}
