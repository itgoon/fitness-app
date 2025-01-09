import { Box } from '@mui/material';
import { RecordDto } from 'src/api';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';

interface IWorkoutCard {
  list: RecordDto[];
  onClick: () => void;
}

export default function WorkoutCardData({ list, onClick }: IWorkoutCard) {
  console.log('운동 리스트');
  console.log(list);

  return (
    <>
      {list?.map((card, key) => (
        <Box key={key} py={1.5} onClick={onClick}>
          {/* <ReservationCard
            key={key}
            card={card}
            layoutSx={{ padding: 0 }}
            cardSx={{ alignItems: 'center' }}
          /> */}
          운동 리스트
        </Box>
      ))}
    </>
  );
}
