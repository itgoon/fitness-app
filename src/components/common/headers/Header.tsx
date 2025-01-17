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
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        backgroundColor: 'background.paper',
        zIndex: 1000
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 24,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center'
        }}
      >
        {left}
      </Box>

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

      <Box
        sx={{
          width: 80,
          height: 24,
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center'
        }}
      >
        {right}
      </Box>
    </Box>
  );
}
