import { Box, Stack } from '@mui/system';
import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { dummyReservaitonListCard } from 'src/utils/dummy';
import EmptyCard from 'src/components/custom/customCard/EmptyCard';
import ReservationCard from 'src/components/custom/reservationCard/ReservationCard';

interface ReservationListProps {
  date: string;
}

export default function ReservationList({ date }: ReservationListProps) {
  const cardDataList = dummyReservaitonListCard;

  const navigate = useNavigate();

  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  const onCardClick = () => {
    navigate(`/schedule/detail/${date}`);
  };

  return (
    <Stack gap={2}>
      {cardDataList?.length === 0 ? (
        <EmptyCard
          children={
            <Typography
              variant="Body16/regular"
              lineHeight="24px"
              color={light ? 'grey.500' : 'white'}
            >
              아직 예약 내역이 없어요.
            </Typography>
          }
        />
      ) : (
        <>
          {cardDataList?.map((card, key) => (
            <Box key={key} py={1.5} onClick={onCardClick}>
              <ReservationCard
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
