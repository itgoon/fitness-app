import { Box, Button, Stack, Typography } from '@mui/material';
import ButtonWrapper from 'src/components/ButtonWrapper';
import StackHeader from 'src/components/common/headers/StackHeader';
import Sizer from 'src/components/common/Sizer';
import Divider from 'src/components/custom/Divider';
import { useState } from 'react';
import TimeSlot from './TimeSlot';
import TimeSlotContainer from './TimeSlotContainer';

export default function ReservationPage() {
  const [currentDate, setCurrentDate] = useState('');

  // 레슨 시간 데이터 패칭

  return (
    <>
      <StackHeader title="임시 제목" />

      {/* 달력 */}
      <Box sx={{ backgroundColor: 'black', height: 300 }} />
      <Divider />

      <Stack sx={{ pb: 15 }}>
        <Sizer>
          <Stack sx={{ py: 4, gap: 3 }}>
            <Typography color="grey.900" variant="Body16/bold">
              레슨 시간을 선택해주세요.
            </Typography>

            {/* 레슨 시간 셀렉터 */}
            <TimeSlotContainer>
              <TimeSlot>09:00</TimeSlot>
              <TimeSlot>10:00</TimeSlot>
              <TimeSlot>11:00</TimeSlot>
              <TimeSlot>12:00</TimeSlot>
              <TimeSlot disabled>13:00</TimeSlot>
              <TimeSlot>14:00</TimeSlot>
              <TimeSlot>15:00</TimeSlot>
              <TimeSlot disabled>16:00</TimeSlot>
              <TimeSlot>17:00</TimeSlot>
              <TimeSlot>18:00</TimeSlot>
            </TimeSlotContainer>
          </Stack>

          <ButtonWrapper>
            <Button fullWidth size="large" variant="contained" color="primary">
              다음
            </Button>
          </ButtonWrapper>
        </Sizer>
      </Stack>
    </>
  );
}
