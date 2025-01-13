import { Box, Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function TermsTitle({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <Box
      padding="12px 16px"
      bgcolor={theme.palette.mode === 'light' ? 'grey.800' : 'white'}
    >
      <Typography
        variant="Body16/bold"
        color={theme.palette.mode === 'light' ? 'white' : 'grey.800'}
        children={`[${children}]`}
      />
    </Box>
  );
}
