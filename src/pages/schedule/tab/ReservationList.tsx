import { Box } from '@mui/system';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';
import { IReservationList } from './types';
import { dummyReservaitonListCard } from '../../../utils/dummy';

export default function ReservationList({
  cardDataList = dummyReservaitonListCard
}: IReservationList) {
  return (
    <Box>
      {cardDataList?.map((card, key) => (
        <Box py={1.5}>
          <ReservationCard
            key={key}
            cardData={card}
            layoutSx={{ padding: 0 }}
            cardSx={{ alignItems: 'center' }}
          />
        </Box>
      ))}
    </Box>
  );
}
