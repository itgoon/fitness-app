import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function CardHeader({ children }: PropsWithChildren) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography variant="Body18/semiBold" color="grey.900">
        {children}
      </Typography>
    </Box>
  );
}
