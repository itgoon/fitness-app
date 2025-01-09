import { Box } from '@mui/material';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';

import { cardData } from '../types';

interface IWorkoutCard {
  cardDataList: cardData[];
  onClick: () => void;
}

export default function WorkoutCard({ cardDataList, onClick }: IWorkoutCard) {
  return (
    <>
      {cardDataList?.map((card, key) => (
        <Box key={key} py={1.5} onClick={onClick}>
          <ReservationCard
            key={key}
            cardData={card}
            layoutSx={{ padding: 0 }}
            cardSx={{ alignItems: 'center' }}
          />
        </Box>
      ))}
    </>
  );
}
