import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';

import { useNavigate } from 'react-router';
import { chipChange } from '../../../../utils/chipChange';
import Icon from '../../../../components/Icon';
import EmptyCard from '../../../../components/custom/customCard/EmptyCard';
import Button from '../../../../components/Button';
import { getPeriodTime, getTimeDifference } from '../../../../utils/formatTime';
import ListWrap from './ListWrap';
import { useModal } from '../../../../hooks/useModal';

export default function DetailStep1({ onNext, selectedCard }) {
  const navigate = useNavigate();
  const { openConfirm } = useModal();
  const theme = useTheme();
  const layoutSx = {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  };
  const light = theme.palette.mode === 'light';
  const grey600 = light ? theme.palette.grey[600] : 'white';

  const { chipState, time } = selectedCard;
  const chip = chipChange(chipState);

  const isWarning = chipState === 'warning';
  const isUndefined = chipState !== undefined;
  return (
    <>
      <Box pt={6.5} sx={layoutSx}>
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
        <ListWrap selectedCard={selectedCard} />
      </EmptyCard>

      {isWarning && (
        <Button
          size={'small'}
          variant={'outlined'}
          color={'error'}
          children={'예약 취소'}
          onClick={() =>
            openConfirm({
              title: '',
              content: '정말로 예약을 취소하시겠습니까?',
              onClick: () => onNext(),
              clickMsg: '예약취소',
              closeMsg: '아니요',
              clickColor: 'error'
            })
          }
        />
      )}
    </>
  );
}
