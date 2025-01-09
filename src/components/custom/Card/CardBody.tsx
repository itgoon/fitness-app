import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

interface CardBodyProps {
  onClick: () => void;
}

export default function CardBody({
  children,
  onClick
}: PropsWithChildren<CardBodyProps>) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 2.5,
        py: 3,
        backgroundColor: '#ECEFF1',
        borderRadius: 2,
        gap: 2
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}
