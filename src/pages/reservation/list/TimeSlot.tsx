import { Button, Grid, SxProps } from '@mui/material';
import { memo } from 'react';

interface TimeSlotProps {
  time: string;
  isActive: boolean;
  disabled?: boolean;
  sx?: SxProps;
  onClick: (time: string) => void;
}

function TimeSlot({
  time,
  disabled = false,
  isActive = false,
  onClick,
  sx
}: TimeSlotProps) {
  return (
    <Grid item xs={1}>
      <Button
        variant="outlined"
        disabled={disabled}
        onClick={() => onClick(time)}
        sx={{
          width: '100%',
          height: 56,
          border: '1px solid',
          borderColor: isActive ? 'primary.main' : 'grey.200',
          borderRadius: 1,
          fontSize: '14px',
          color: isActive ? 'primary.main' : 'text.primary',
          ...sx
        }}
      >
        {time}
      </Button>
    </Grid>
  );
}

export default memo(TimeSlot);
