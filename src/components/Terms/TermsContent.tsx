import { Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function TermsContent({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <Typography
      color={theme.palette.mode === 'light' ? 'grey.600' : 'white'}
      variant="Body14/light"
    >
      {children}
    </Typography>
  );
}
