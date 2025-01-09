import { Stack } from '@mui/material';
import Notification from './Notification';
import WorkoutStatus from './WorkoutStatus';
import Wrap from '../../components/custom/Wrap';
import Divider from '../../components/custom/Divider';
import WeekCalendar from './WeekCalendar';

/**
 * ******************************************************
 * 대시보드 화면
 * 기획 설명 추가 필요
 * 운동 시작 버튼을 누른 경우 운동 종료 시간을 누른 경우는 타이머 설정을 할 것인지?
 * 운동 종료를 누른 경우 해당 정보를 화면에 그대로 노출 시키는지?
 * ******************************************************
 */

export default function HomePage() {
  return (
    <Stack>
      <Wrap padding="0 !important">
        <WeekCalendar />
        <Divider />
      </Wrap>

      <WorkoutStatus />
      <Divider />

      <Notification />
      <Divider />
    </Stack>
  );
}
