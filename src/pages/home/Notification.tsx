import { Divider, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import AlaramCard from '../../components/custom/AlaramCard';
import ReservationCard from '../../components/custom/reservationCard/ReservationCard';
import EmptyCard from '../../components/custom/customCard/EmptyCard';
import { dummyCardData, dummyReservaitonListCard } from '../../utils/dummy';
import Wrap from './Wrap';

interface INotification {
  isAlarm: boolean;
}
export default function Notification({ isAlarm }: INotification) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const navigate = useNavigate();

  return (
    <Wrap gap={1.5} sx={{ padding: '0 !important' }}>
      <Typography
        variant="Body18/bold"
        children="오늘의 알림"
        sx={{ padding: '32px 20px 0' }}
        color={grey900}
      />
      <Divider />
      {!isAlarm ? (
        <EmptyCard margin="12px 20px 32px" children="알림 내용이 없습니다." />
      ) : (
        <>
          <AlaramCard
            isEmpty={false}
            title="새로운 서명요청이 있습니다!"
            dataList={dummyCardData}
            onClick={() => navigate('/contract')}
            onClickMsg="서명하기"
          />
          <ReservationCard cardData={dummyReservaitonListCard[0]} />
        </>
      )}
    </Wrap>
  );
}
