import { Stack, Typography, useTheme } from '@mui/material';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';

interface IWorkOutRecord {
  date: string;
}
const cardDataList = [{ iconName: 'WeightSvg', label: '72kg' }];
export default function WorkOutRecord({ date }: IWorkOutRecord) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey500 = light ? palette.grey[500] : 'white';
  return (
    <Stack gap={3}>
      <EmptyCard
        children={
          <Typography
            variant={'Body16/regular'}
            lineHeight="24px"
            color={grey500}
          >
            운동 기록을 찾을 수 없어요 <br /> 오늘부터 기록을 채워보세요.
          </Typography>
        }
      />
      <ReservationCard
        date={date}
        cardDataList={cardDataList}
        layoutSx={{ padding: 0 }}
        cardSx={{ alignItems: 'center' }}
      ></ReservationCard>
    </Stack>
  );
}
