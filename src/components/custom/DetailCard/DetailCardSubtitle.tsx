import { Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function DetailCardSubTitle({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <Typography
      variant="Body14/light"
      color={theme.palette.mode === 'light' ? 'grey.600' : 'white'}
    >
      {children}
    </Typography>
  );
}
