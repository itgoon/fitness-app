import { Stack, Typography, useTheme } from "@mui/material";
import EmptyCard from "../../components/custom/customCard/EmptyCard";
interface state {
  isWorking: boolean;
  isAlarm: boolean;
  isStart: boolean;
  isEnd: boolean;
  startTime: string; 
  endTime: string;   
}
interface IworkoutData {
  state: state;
  onClick: (arg: string) => void;
  totalTime: string;
}
export default function WorkoutData({state, onClick, totalTime}: IworkoutData) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const grey = light ? palette.grey[500] : palette.grey[600];
  const { isWorking, startTime, endTime } = state;
    if (!isWorking) return null;
    return (
      <EmptyCard direction="row" justifyContent="start" padding="24px" gap={13}>
        <Stack gap={2}>
          <Stack gap={0.5} onClick={() => onClick('isStart')}>

            <Typography variant="Body14/regular" color={grey}>"운동시작"</Typography>
            <Typography variant="Body20/bold" color={grey900}>{startTime} </Typography>

          </Stack>

          <Stack gap={0.5} onClick={() => onClick('isEnd')}>
            <Typography
              variant="Body14/regular"
              color={grey}
              children="운동종료"
            />
            <Typography
              variant="Body20/bold"
              children={endTime}
              color={grey900}
            />
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <Typography
            variant="Body14/regular"
            color={grey}
            children="총 운동 시간"
          />
          <Typography variant="Body20/bold" color={grey900}>{totalTime}</Typography>
        </Stack>
      </EmptyCard>
    );
}