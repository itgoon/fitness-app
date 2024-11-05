import { Stack } from '@mui/material';
import { IStep } from '../types';
import ResponsePage from '../../../components/custom/ResponsePage';

export default function ReservationStep3({ reservationData, onNext }: IStep) {
  if (!reservationData) return;
  return (
    <Stack height={'100%'} px={2.5} pt={5} gap={2}>
      <ResponsePage
        title={'예약이 완료되었습니다.'}
        iconName={'CheckSvg'}
        dataList={reservationData}
        onClick={() => console.log('예약 내역 페이지')}
        closeMsg={'예약 내역 보기'}
        clickMsg={'홈으로'}
      />
    </Stack>
  );
}
