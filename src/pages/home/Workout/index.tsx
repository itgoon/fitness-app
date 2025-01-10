import { useState } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Sizer from 'src/components/common/Sizer';
import { useMe } from 'src/hooks/useMe';
import { RecordService } from 'src/service';
import Button from '../../../components/Button';
import { MontFormatKR } from '../../../utils/formatTime';
import Card from './Card';

export default function Workout() {
  const theme = useTheme();

  const me = useMe();

  const today = dayjs().format(MontFormatKR);

  const [isWorking, setIsWoriking] = useState(false);

  const onStartClick = async () => {
    setIsWoriking(true);

    // // 운동 시작 요청
    // await RecordService.updateStartTime({
    //   updateRecordStartTimeDto: { rcdDate: '', rcdStartTime: '' }
    // });
  };

  return (
    <Sizer>
      <Stack sx={{ py: 4 }}>
        <Typography
          variant="Body18/semiBold"
          color={theme.palette.mode === 'light' ? 'grey.500' : 'grey.600'}
          sx={{ mb: 1 }}
        >
          {today}
        </Typography>

        <Stack gap={2.5}>
          <Typography variant="Body20/semiBold" lineHeight="30px">
            <Box component="span">{me?.mbrNm} 님,</Box>
            <br />
            <Box component="span">
              {isWorking
                ? '오늘도 목표를 향해 같이 달려가봐요'
                : '오늘 운동을 시작하지 않으셨네요!'}
            </Box>
          </Typography>
          {!isWorking ? (
            <Button
              color="primary"
              typoVariant="Body18/semiBold"
              size="large"
              onClick={onStartClick}
              sx={{ marginTop: 0.5 }}
              variant="contained"
            >
              운동시작
            </Button>
          ) : (
            <Card isWorking={isWorking} />
          )}
        </Stack>
      </Stack>
    </Sizer>
  );
}
