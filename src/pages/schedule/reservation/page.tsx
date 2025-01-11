import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { ScheduleService } from 'src/service';
import { useParams } from 'react-router';
import { ScheduleDto } from 'src/api';
import StackHeader from 'src/components/common/headers/StackHeader';
import ReservedCard from './ReservedCard';

export default function ReservationCardDetail() {
  const params = useParams();

  const { id } = params;

  const [reservation, setReservation] = useState<ScheduleDto | null>(null);

  useEffect(() => {
    loadSingleReservation();
  }, []);

  const loadSingleReservation = async () => {
    const res = await ScheduleService.loadSingleReservation({ id: Number(id) });

    setReservation(res);
  };

  return (
    // 헤더
    <>
      <StackHeader title="임시 헤더" />

      <Stack gap={2.5} pt={5} px={2.5} height="calc(100% - 56px)">
        <ReservedCard reservation={reservation} />
        {/*
        <AttendancedCard />
         */}
      </Stack>
    </>
  );
}
