import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function DetailCardBody({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        px: 2.5,
        py: 3,
        backgroundColor: '#ECEFF1',
        borderRadius: 1.5,
        gap: 2
      }}
    >
      {children}
    </Box>
  );
}
