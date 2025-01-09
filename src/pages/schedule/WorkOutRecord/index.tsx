import { Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import { dummyWorkOutRecordList } from 'src/utils/dummy';
import WorkoutCard from './WorkoutCard';
import EmptyWorkoutData from './EmptyWorkoutData';

interface WorkOutRecordProps {
  date: string;
}

export default function WorkOutRecord({ date }: WorkOutRecordProps) {
  const cardDataList = dummyWorkOutRecordList;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/schedule/workout/${date}`);
  };

  return (
    <Stack gap={2}>
      {cardDataList?.length === 0 ? (
        <EmptyWorkoutData />
      ) : (
        <WorkoutCard cardDataList={cardDataList} onClick={onClick} />
      )}
    </Stack>
  );
}
