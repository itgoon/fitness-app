import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface HeaderProps {
  left?: ReactNode;
  title: ReactNode;
  right?: ReactNode;
}

export default function Header({ left, title, right }: HeaderProps) {
  return (
    <Box
      component="header"
      role="presentation"
      sx={{
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2
      }}
    >
      {left}

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <Typography variant="Body18/bold" color="text.primary">
          {title}
        </Typography>
      </Box>

      {right}
    </Box>
  );
}
