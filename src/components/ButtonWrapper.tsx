import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function ButtonWrapper({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        px: 2.5,
        pt: 3,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        gap: 1
      }}
    >
      {children}
    </Box>
  );
}
