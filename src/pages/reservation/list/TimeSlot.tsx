import { Button, Grid } from '@mui/material';
import { PropsWithChildren } from 'react';

interface TimeSlotProps {
  disabled?: boolean;
}

export default function TimeSlot({
  children,
  disabled = false
}: PropsWithChildren<TimeSlotProps>) {
  return (
    <Grid item xs={1}>
      <Button
        variant="outlined"
        disabled={disabled}
        sx={{
          width: '100%',
          height: 56,
          border: '1px solid',
          borderColor: 'grey.200',
          borderRadius: 1,
          fontSize: '14px'
        }}
      >
        {children}
      </Button>
    </Grid>
  );
}
