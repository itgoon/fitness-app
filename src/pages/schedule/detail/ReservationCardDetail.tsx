import { Stack } from '@mui/material';

import ReservedCard from './ReservedCard';
import AttendancedCard from './AttendancedCard';

export default function ReservationCardDetail() {
  return (
    <Stack gap={2.5} pt={5} px={2.5} height="calc(100% - 56px)">
      <ReservedCard />
      {/*
      <AttendancedCard />
       */}
    </Stack>
  );
}
