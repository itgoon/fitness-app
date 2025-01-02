import { Stack } from '@mui/material';
import ResponsePage from '../../../../components/custom/ResponsePage';

const signDataList = [
  { label: '센터명', value: '리온짐' },
  { label: '요청 일자', value: '2024년 9월 1일 12:00' },
  { label: '서명 일자', value: '2024년 9월 1일 12:03' }
];

export default function Step3() {
  return (
    <Stack justifyContent={'space-between'} height={'100%'}>
      <ResponsePage
        onClick={() => console.log('회원권 보기')}
        title={'서명 등록이 완료되었습니다.'}
        closeMsg={'회원권 보기'}
        clickMsg={'홈으로'}
        dataList={signDataList}
      />
    </Stack>
  );
}
