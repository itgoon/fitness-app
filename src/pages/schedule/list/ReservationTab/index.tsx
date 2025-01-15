import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { ScheduleService } from 'src/service';
import { ScheduleDto } from 'src/api';
import dayjs from 'dayjs';
import EmptyReservationData from './EmptyReservationData';
import ReservationData from './ReservationData';

interface ReservationTabProps {
  date: string;
}

export default function ReservationTab({ date }: ReservationTabProps) {
  const [reservationList, setReservationList] = useState<ScheduleDto[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadScheduleList();
  }, []);

  const loadScheduleList = async () => {
    const res = await ScheduleService.loadReservationList({});

    setReservationList(res.data);
  };

  const onClick = (id: number) => {
    navigate(`/schedule/reservation/${id}`, {
      state: { title: dayjs(date).format('M월 DD일 ddd요일') }
    });
  };

  return reservationList?.length === 0 ? (
    <EmptyReservationData />
  ) : (
    <ReservationData list={reservationList} onClick={onClick} />
  );
}
