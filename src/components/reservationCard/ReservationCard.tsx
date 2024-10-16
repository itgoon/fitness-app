import { Chip, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { MontFormatKR } from '../../utils/formatTime';
import CardBody from './CardBody';
import { IReservationCard } from './types';

export default function ReservationCard({
  layoutSx,
  date,
  chipLabel
}: IReservationCard) {
  const dateKR = dayjs(date).format(MontFormatKR);
  const day = dayjs(date).format('dddd');
  const chipState =
    chipLabel === 'warning'
      ? '예약'
      : chipLabel === 'error'
        ? '예약취소'
        : '출석';

  return (
    <Stack gap={1.5} sx={{ ...layoutSx }}>
      <Stack direction={'row'} alignItems={'center'} gap={1}>
        <Typography variant="Body18/semiBold">{`${dateKR} ${day}`}</Typography>
        <Chip size={'small'} color={chipLabel} label={chipState} />
      </Stack>

      <CardBody chipLabel={chipLabel} />
    </Stack>
  );
}
