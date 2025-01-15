import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface ResponseBodyItemProps {
  label: string;
  value: string;
}

export default function ResponseBodyItem({
  label,
  value
}: ResponseBodyItemProps) {
  return (
    <Box
      sx={{
        py: 1.5,
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="Body16/regular" color="grey.600">
        {label}
      </Typography>
      <Typography variant="Body16/semiBold">{value}</Typography>
    </Box>
  );
}
