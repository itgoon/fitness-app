import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import Sizer from 'src/components/common/Sizer';
import { paths } from 'src/routes/paths';
import AlaramCard from '../../../components/custom/AlaramCard';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import { dummyCardData } from '../../../utils/dummy';
import Divider from '../../../components/custom/Divider';

export default function Notification() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const navigate = useNavigate();

  return (
    <>
      <Typography
        variant="Body18/bold"
        children="오늘의 알림"
        sx={{ padding: '32px 20px 0' }}
        color={grey900}
      />

      <Sizer>
        <EmptyCard sx={{ mt: 1.5, mb: 4 }}>알림 내용이 없습니다.</EmptyCard>

        <AlaramCard
          isEmpty={false}
          title="새로운 서명요청이 있습니다!"
          dataList={dummyCardData}
          onClick={() => navigate(paths.contract.terms)}
          onClickMsg="서명하기"
        />
      </Sizer>
    </>
  );
}
