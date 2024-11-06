import { Box, Stack, Typography, useTheme } from '@mui/material';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';
import { IWorkOutRecord } from '../types';
import { dummyWorkOutRecordList } from '../../../utils/dummy';
import { useCardContext } from '../../../hooks/useCard';
import { useNavigate } from 'react-router';

export default function WorkOutRecord({
  cardDataList = dummyWorkOutRecordList
}: IWorkOutRecord) {
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
              variant={'Body16/regular'}
              lineHeight="24px"
              color={grey500}
            >
              운동 기록을 찾을 수 없어요 <br /> 오늘부터 기록을 채워보세요.
            </Typography>
          }
        />
      ) : (
        <>
          {cardDataList.map((card, key) => (
            <Box py={1.5} onClick={() => handleCardClick(card, key)}>
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
