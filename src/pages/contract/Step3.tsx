import { Stack } from '@mui/material';
import ResponsePage from '../../components/custom/ResponsePage';
import { useNavigate } from 'react-router';

const signDataList = [
  { label: '센터명', value: '리온짐' },
  { label: '요청 일자', value: '2024년 9월 1일 12:00' },
  { label: '서명 일자', value: '2024년 9월 1일 12:03' }
];

export default function Step3() {
  const navigate = useNavigate();
  return (
    <Stack height={'calc(100% - 24px)'} justifyContent={'space-between'}>
      <ResponsePage
        onClick={() => console.log('회원권 보기')}
        onHome={() => navigate('/dashboard')}
        closeMsg={'회원권 보기'}
        clickMsg={'홈으로'}
        dataList={signDataList}
      />
    </Stack>
  );
}
