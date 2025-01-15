import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import ButtonWrapper from 'src/components/ButtonWrapper';
import Sizer from 'src/components/common/Sizer';
import { paths } from 'src/routes/paths';

export default function ReservationCheckPage() {
  const navigate = useNavigate();

  return (
    <Sizer>
      <Stack sx={{ py: 5, gap: 2 }}>
        <Typography variant="Body20/semiBold">
          아래 예약 정보를 확인해주세요
        </Typography>

        <Stack
          sx={{ backgroundColor: 'grey.50', p: 2.5, borderRadius: 1.5, gap: 2 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="Body16/regular" color="grey.600">
              예약 일자
            </Typography>
            <Typography variant="Body16/semiBold">더미 데이터</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="Body16/regular" color="grey.600">
              레슨 시간
            </Typography>
            <Typography variant="Body16/semiBold">더미 데이터</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="Body16/regular" color="grey.600">
              레슨/회차
            </Typography>
            <Typography variant="Body16/semiBold">더미 데이터</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="Body16/regular" color="grey.600">
              담당 강사
            </Typography>
            <Typography variant="Body16/semiBold">더미 데이터</Typography>
          </Box>
        </Stack>
      </Stack>

      <ButtonWrapper>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={() => navigate(paths.reservation.success)}
        >
          예약하기
        </Button>
      </ButtonWrapper>
    </Sizer>
  );
}
