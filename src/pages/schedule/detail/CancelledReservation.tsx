import dayjs from 'dayjs';
import { Stack } from '@mui/material';
import ResponsePage from '../../../components/custom/ResponsePage';

const dataList = [
  {
    label: '예약 일자',
    value: dayjs('2025-01-09').format('YYYY년 MM월 DD일')
  },
  { label: '레슨 시간', value: 'time' },
  { label: '레슨/회차', value: 'count' },
  { label: '담당 강사', value: 'trainer' },
  { label: '취소 일시', value: dayjs().format('YYYY년 MM월 DD일 hh:mm') }
];

export default function CancelledReservation() {
  return (
    <Stack gap={2.5} pt={5} px={2.5} height="calc(100% - 56px)">
      <ResponsePage
        title="예약이 취소되었습니다."
        iconName="CloseSvg"
        dataList={dataList}
        onClick={() => console.log('예약 내역 페이지')}
        closeMsg="예약 내역 보기"
        clickMsg="홈으로"
      />
    </Stack>
  );
}
