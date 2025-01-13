import { Box, Stack, Typography } from '@mui/material';
import Button from 'src/components/Button';
import StackHeader from 'src/components/common/headers/StackHeader';
import Sizer from 'src/components/common/Sizer';
import Divider from 'src/components/custom/Divider';

export default function ReservationPage() {
  return (
    <>
      <StackHeader title="임시 제목" />

      {/* 달력 */}
      <Box sx={{ backgroundColor: 'black', height: 300 }} />
      <Divider />

      <Stack sx={{ height: 600 }}>
        <Sizer>
          <Stack sx={{ py: 4, gap: 3 }}>
            <Typography color="grey.900" variant="Body18/semiBold">
              레슨 시간을 선택해주세요.
            </Typography>
            {/* 날짜 셀렉터 */}
            날짜선택
          </Stack>

          <Button
            typoVariant="Body18/semiBold"
            size="large"
            variant="contained"
            color="primary"
          >
            다음
          </Button>
        </Sizer>
      </Stack>
    </>
  );
}
