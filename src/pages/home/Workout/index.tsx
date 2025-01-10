import { useState } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Sizer from 'src/components/common/Sizer';
import Button from '../../../components/Button';
import { MontFormatKR } from '../../../utils/formatTime';
import Card from './Card';

const name = '홍길동';

export default function Workout() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey = light ? palette.grey[500] : palette.grey[600];
  const today = dayjs().format(MontFormatKR);

  const [isWorking, setIsWoriking] = useState(false);

  return (
    <Sizer>
      <Stack sx={{ py: 4 }}>
        <Typography variant="Body18/semiBold" color={grey} sx={{ mb: 1 }}>
          {today}
        </Typography>

        <Stack gap={2.5}>
          <Typography variant="Body20/semiBold" lineHeight="30px">
            <span>{name} 님,</span>
            <br />
            <span>
              {isWorking
                ? '오늘도 목표를 향해 같이 달려가봐요'
                : '오늘 운동을 시작하지 않으셨네요!'}
            </span>
          </Typography>
          {!isWorking ? (
            <Button
              color="primary"
              typoVariant="Body18/semiBold"
              size="large"
              onClick={() => setIsWoriking(true)}
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
