import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import ButtonWrapper from 'src/components/ButtonWrapper';
import Sizer from 'src/components/common/Sizer';
import ResponseBodyItem from 'src/components/response/ResponseBodyItem';
import ResponseHeader from 'src/components/response/ResponseHeader';
import { paths } from 'src/routes/paths';

export default function ReservationSuccessPage() {
  const navigate = useNavigate();

  return (
    <Sizer>
      <Stack sx={{ py: 5, gap: 7.5 }}>
        <ResponseHeader icon="CheckSvg" title="예약이 완료되었습니다." />

        <Stack>
          <ResponseBodyItem label="예약 일자" value="더미 데이터" />
          <ResponseBodyItem label="레슨 시간" value="더미 데이터" />
          <ResponseBodyItem label="레슨/회차" value="더미 데이터" />
          <ResponseBodyItem label="담당강사" value="더미 데이터" />
        </Stack>
      </Stack>

      <ButtonWrapper>
        <Button
          fullWidth
          size="large"
          color="primary"
          variant="outlined"
          onClick={() => navigate(paths.schedule.root)}
          sx={{ borderColor: 'primary.main' }}
        >
          예약 내역 보기
        </Button>
        <Button
          fullWidth
          size="large"
          color="primary"
          variant="contained"
          onClick={() => navigate(paths.home.root)}
        >
          홈으로
        </Button>
      </ButtonWrapper>
    </Sizer>
  );
}
