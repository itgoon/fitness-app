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
  const chipState =
    chipLabel === 'warning'
      ? '예약'
      : chipLabel === 'error'
        ? '예약취소'
        : '출석';

  return (
    <Stack gap={1.5} sx={{ padding: '8px 20px 32px', ...layoutSx }}>
      <Stack direction={'row'} alignItems={'center'} gap={1}>
        <Typography variant="Body18/semiBold">{`${dateKR}`}</Typography>
        <Chip size={'small'} color={chipLabel} label={chipState} />
      </Stack>

      <CardBody chipLabel={chipLabel} />
    </Stack>
  );
}
