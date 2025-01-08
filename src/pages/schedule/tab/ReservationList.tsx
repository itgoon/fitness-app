import { Box, Stack } from '@mui/system';
import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';
import { IReservationList } from '../types';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import { useCardContext } from '../../../hooks/useCard';

export default function ReservationList({ cardDataList }: IReservationList) {
  const { setSelectedCard } = useCardContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey500 = light ? palette.grey[500] : 'white';

  const handleCardClick = (card, key) => {
    navigate(`/schedule/detail/${key}`);
    setSelectedCard(card);
  };

  return (
    <Stack gap={2}>
      {cardDataList?.length === 0 ? (
        <EmptyCard
          children={
            <Typography
              variant="Body16/regular"
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
            <Box key={key} py={1.5} onClick={() => handleCardClick(card, key)}>
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
