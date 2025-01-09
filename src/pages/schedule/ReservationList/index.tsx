import { Box, Stack } from '@mui/system';
import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { dummyReservaitonListCard } from 'src/utils/dummy';
import ReservationCard from 'src/components/custom/reservationCard/ReservationCard';
import EmptyReservationData from './EmptyReservationData';
import ReservationData from './ReservationData';

interface ReservationListProps {
  date: string;
}

export default function ReservationList({ date }: ReservationListProps) {
  const cardDataList = dummyReservaitonListCard;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/schedule/reservation/${date}`);
  };

  return (
    <Stack gap={2}>
      {cardDataList?.length === 0 ? (
        <EmptyReservationData />
      ) : (
        <ReservationData cardDataList={cardDataList} onClick={onClick} />
      )}
    </Stack>
  );
}
