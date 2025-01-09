import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { ScheduleService } from 'src/service';
import ReservedCard from './ReservedCard';
import AttendancedCard from './AttendancedCard';

export default function ReservationCardDetail() {
  // 예약 내역 데이터 패칭
  const [reservation, setReservation] = useState(null);

  return (
    <Stack gap={2.5} pt={5} px={2.5} height="calc(100% - 56px)">
      <ReservedCard />
      {/*
      <AttendancedCard />
       */}
    </Stack>
  );
}
