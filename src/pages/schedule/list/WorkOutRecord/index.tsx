import { Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { RecordService } from 'src/service';
import { RecordDto } from 'src/api';
import WorkoutCardData from './WorkoutCardData';
import EmptyWorkoutData from './EmptyWorkoutData';

interface WorkOutRecordProps {
  date: string;
}

export default function WorkOutRecord({ date }: WorkOutRecordProps) {
  const [recordList, setRecordList] = useState<RecordDto[]>([]);

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/schedule/workout/${date}`);
  };

  useEffect(() => {
    loadScheduleList();
  }, []);

  const loadScheduleList = async () => {
    const res = await RecordService.loadRecordList();

    setRecordList(res.data);
  };

  return (
    <Stack gap={2}>
      {recordList?.length === 0 ? (
        <EmptyWorkoutData />
      ) : (
        <WorkoutCardData list={recordList} onClick={onClick} />
      )}
    </Stack>
  );
}
