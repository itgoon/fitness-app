import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { dummyWorkOutRecordList } from 'src/utils/dummy';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import ReservationCard from '../../../components/custom/reservationCard/ReservationCard';

interface WorkOutRecordProps {
  date: string;
}

export default function WorkOutRecord({ date }: WorkOutRecordProps) {
  const cardDataList = dummyWorkOutRecordList;

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
              운동 기록을 찾을 수 없어요 <br /> 오늘부터 기록을 채워보세요.
            </Typography>
          }
        />
      ) : (
        <>
          {cardDataList?.map((card, key) => (
            <Box key={key} py={1.5} onClick={onCardClick}>
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
