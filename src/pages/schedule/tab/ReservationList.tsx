import { Box, Stack } from '@mui/system';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';
import { IReservationList } from './types';
import { dummyReservaitonListCard } from '../../../utils/dummy';
import { Typography, useTheme } from '@mui/material';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';

export default function ReservationList({
  cardDataList = dummyReservaitonListCard
}: IReservationList) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey500 = light ? palette.grey[500] : 'white';
  return (
    <Stack gap={2}>
      {cardDataList.length === 0 ? (
        <EmptyCard
          children={
            <Typography
              variant={'Body16/regular'}
              lineHeight="24px"
              color={grey500}
            >
              아직 예약 내역이 없어요.
            </Typography>
          }
        />
      ) : (
        <>
          {cardDataList?.map((card, key) => (
            <Box py={1.5}>
              <ReservationCard
                key={key}
                cardData={card}
                layoutSx={{ padding: 0 }}
                cardSx={{ alignItems: 'center' }}
              />
            </Box>
          ))}
        </>
      )}
    </Stack>
  );
}
