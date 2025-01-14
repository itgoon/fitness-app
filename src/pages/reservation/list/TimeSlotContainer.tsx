import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function TimeSlotContainer({ children }: PropsWithChildren) {
  return (
    <Grid container spacing={1} columns={2}>
      {children}
    </Grid>
  );
}
