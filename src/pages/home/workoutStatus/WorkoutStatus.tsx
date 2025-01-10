import { useState } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Button from '../../../components/Button';
import Wrap from '../../../components/custom/Wrap';
import { MontFormatKR } from '../../../utils/formatTime';
import Card from './Card';

const name = '홍길동';

export default function WorkoutStatus() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey = light ? palette.grey[500] : palette.grey[600];
  const today = dayjs().format(MontFormatKR);

  const [isWorking, setIsWoriking] = useState(false);

  return (
    <Wrap gap={1} sx={{ padding: '32px 20px 20px' }}>
      <Typography variant="Body18/semiBold" color={grey}>
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
    </Wrap>
  );
}
