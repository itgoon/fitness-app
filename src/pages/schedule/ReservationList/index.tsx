import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { ScheduleService } from 'src/service';
import { ScheduleDto } from 'src/api';
import EmptyReservationData from './EmptyReservationData';
import ReservationData from './ReservationData';

interface ReservationListProps {
  date: string;
}

export default function ReservationList({ date }: ReservationListProps) {
  const [reservationList, setReservationList] = useState<ScheduleDto[]>([]);

  const navigate = useNavigate();

  const onClick = (id: number) => {
    navigate(`/schedule/reservation/${id}`);
  };

  useEffect(() => {
    loadScheduleList();
  }, []);

  const loadScheduleList = async () => {
    const res = await ScheduleService.loadReservationList({});

    setReservationList(res.data);
  };

  return reservationList?.length === 0 ? (
    <EmptyReservationData />
  ) : (
    <ReservationData list={reservationList} onClick={onClick} />
  );
}
