import { Box } from '@mui/material';
import { RecordDto } from 'src/api';

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
          운동 리스트
        </Box>
      ))}
    </>
  );
}
