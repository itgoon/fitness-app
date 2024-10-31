import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import { useCardContext } from '../../../hooks/useCard';
import { chipChange } from '../../../utils/chipChange';
import { useNavigate } from 'react-router';
import { getPeriodTime, getTimeDifference } from '../../../utils/formatTime';

const ListItem = ({ label, value, isWarning = true }) => {
  const theme = useTheme();
  const light = theme.palette.mode === 'light';
  const grey600 = light ? theme.palette.grey[600] : 'white';
  return (
    <Box display={'flex'} justifyContent={'space-between'} py={1.5}>
      <Typography variant={'Body16/regular'} color={grey600} children={label} />

      {isWarning ? (
        <Typography variant={'Body16/semiBold'} children={value} />
      ) : (
        <Box display={'flex'} gap={1}>
          <Typography variant={'Body16/semiBold'} children={value} />
          <Icon sx={{ marginTop: 2 }} name={'EditSvg'} />
        </Box>
      )}
    </Box>
  );
};

export default function CardDetail() {
  const { selectedCard } = useCardContext();
  const navigate = useNavigate();
  const layoutSx = { display: 'flex', alignItems: 'center', gap: 1 };
  const theme = useTheme();
  const light = theme.palette.mode === 'light';
  const grey600 = light ? theme.palette.grey[600] : 'white';

  if (selectedCard === undefined) {
    navigate('/schedule');
  }

  const { chipState, count, date, place, time, trainer } = selectedCard;
  const chip = chipChange(chipState);
  const startTime = time.split('~')[0];
  const endTime = time.split('~')[1];
  const isWarning = chipState === 'warning';
  const isUndefined = chipState !== undefined;

  return (
    <Stack gap={2.5} pt={12.5} px={2.5}>
      <Box sx={layoutSx}>
        <Icon name={chip.largeIconName} size={60} />
        <Stack gap={0.5}>
          <Typography
            variant={'Body14/regular'}
            color={grey600}
            children={isUndefined ? '레슨 예약 시간' : '총 운동 시간'}
          />
          <Box sx={layoutSx}>
            <Typography
              variant={'Body28/semiBold'}
              children={
                isUndefined ? getPeriodTime(time) : getTimeDifference(time)
              }
            />
            {isUndefined && (
              <Chip size={'small'} color={chipState} label={chip.chipLabel} />
            )}
          </Box>
        </Stack>
      </Box>
      <Divider />

      <EmptyCard>
        <Stack width={'100%'} px={2.5} gap={0.5}>
          {isWarning ? (
            <>
              <ListItem label={'장소'} value={place} />
              <ListItem label={'레슨'} value={'[Lv1] 10회'} />
              <ListItem label={'횟수'} value={count} />
              <ListItem label={'담당 강사'} value={trainer} />
            </>
          ) : (
            <>
              <ListItem label={'메모'} value={'등산'} isWarning={false} />
              <ListItem
                label={'레슨 시작'}
                value={startTime}
                isWarning={false}
              />
              <ListItem label={'레슨 종료'} value={endTime} isWarning={false} />
            </>
          )}
        </Stack>
      </EmptyCard>

      {isWarning && (
        <Button
          size={'small'}
          variant={'outlined'}
          color={'error'}
          children={'예약 취소'}
        />
      )}
    </Stack>
  );
}
