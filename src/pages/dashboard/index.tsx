import dayjs from 'dayjs';

import { Divider, Stack, Typography, useTheme } from '@mui/material';
import WeekCalendar from '../../components/WeekCalendar';
import { DateReqFormat } from '../../utils/formatTime';
import { useState } from 'react';
import Button from '../../components/Button';
import Wrap from './wrap/Wrap';

/**
 * ******************************************************
 * 대시보드 화면
 * ******************************************************
 */
export default function DashboardPage() {
  const [date, setDate] = useState(dayjs().format(DateReqFormat));
  const theme = useTheme();
  const grey = theme.palette.grey[500];
  const blgrey = theme.palette.grey.A200;
  const name = '홍길동';
  const istrue = true;
  const isWork = istrue
    ? '오늘 운동을 시작하지 않으셨네요!'
    : '오늘도 목표를 향해 같이 달려가봐요';
  return (
    <Stack>
      <Stack>
        <WeekCalendar date={date} />
        <Divider color={'#ECEFF1'} sx={{ height: 8 }} />
      </Stack>

      <Wrap gap={1} padding={4}>
        <Typography
          variant="Body18/semiBold"
          children={`${date}`}
          color={grey}
        />
        <Typography
          variant="Body20/semiBold"
          lineHeight={'30px'}
          dangerouslySetInnerHTML={{
            __html: `${name}님,<br/> ${isWork}`
          }}
        />
        {!isWork && (
          <Stack
            direction={'row'}
            padding={'20px 24px'}
            gap={13}
            sx={{ backgroundColor: blgrey, borderRadius: 1 }}
          >
            <Stack gap={0.5}>
              <Typography variant="Body14/regular" color={grey}>
                운동시작
              </Typography>
              <Typography variant="Body20/bold">11:01</Typography>
            </Stack>
            <Stack gap={0.5}>
              <Typography variant="Body14/regular" color={grey}>
                총 운동 시간
              </Typography>
              <Typography variant="Body20/bold">0시간 0분</Typography>
            </Stack>
          </Stack>
        )}
        <Button
          color="primary"
          typoVariant={'Body18/semiBold'}
          size="large"
          variant={isWork ? 'contained' : 'outlined'}
          children={isWork ? '운동시작' : '운동종료'}
          sx={{ marginTop: 2, marginBottom: '-12px' }}
        />
      </Wrap>
      <Wrap gap={1.5} sx={{ padding: '0 !important' }}>
        <Typography
          variant="Body18/bold"
          children={'오늘의 알림'}
          sx={{ padding: '32px 20px 0' }}
        />
        <Divider></Divider>
        <Typography
          variant="Body16/regular"
          color={grey}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: blgrey,
            py: 1.5,
            margin: '12px 20px 32px',
            borderRadius: 1
          }}
          children={'알림 내용이 없습니다.'}
        />
      </Wrap>
    </Stack>
  );
}
