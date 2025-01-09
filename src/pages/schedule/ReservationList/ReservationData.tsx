import { Box } from '@mui/material';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';
import { cardData } from '../types';

interface IReservationData {
  cardDataList: cardData[];
  onClick: () => void;
}

export default function ReservationData({
  cardDataList,
  onClick
}: IReservationData) {
  return (
    <>
      {cardDataList?.map((card, key) => (
        <Box key={key} py={1.5} onClick={onClick}>
          <ReservationCard
            cardData={card}
            layoutSx={{ padding: 0 }}
            cardSx={{ alignItems: 'center' }}
          />
        </Box>
      ))}
    </>
  );
}
