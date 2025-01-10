import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import AlaramCard from '../../components/custom/AlaramCard';
import EmptyCard from '../../components/custom/customCard/EmptyCard';
import { dummyCardData } from '../../utils/dummy';
import Wrap from '../../components/custom/Wrap';
import Divider from '../../components/custom/Divider';

export default function Notification() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const navigate = useNavigate();

  return (
    <Wrap gap={1.5} padding={0}>
      <Typography
        variant="Body18/bold"
        children="오늘의 알림"
        sx={{ padding: '32px 20px 0' }}
        color={grey900}
      />
      <Divider borderBottomWidth={1} />

      <EmptyCard margin="12px 20px 32px">알림 내용이 없습니다.</EmptyCard>

      <AlaramCard
        isEmpty={false}
        title="새로운 서명요청이 있습니다!"
        dataList={dummyCardData}
        onClick={() => navigate('/contract')}
        onClickMsg="서명하기"
      />
    </Wrap>
  );
}
