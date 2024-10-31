import { Chip, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import CardBody from './CardBody';
import { IReservationCard } from './types';
import { MontFormatKR } from '../../../utils/formatTime';
import { chipChange } from '../../../utils/chipChange';

export default function ReservationCard({
  layoutSx,
  cardSx,
  cardData
}: IReservationCard) {
  const theme = useTheme();
  const light = theme.palette.mode === 'light';
  const grey900 = light ? theme.palette.grey[900] : 'white';

  const dateKR = dayjs(cardData?.date).format(MontFormatKR);

  const chipState = cardData?.chipState;
  const chipLabel = chipChange(chipState).chipLabel;

  return (
    <Stack gap={1.5} sx={{ padding: '8px 20px 32px', ...layoutSx }}>
      <Stack direction={'row'} alignItems={'center'} gap={1}>
        <Typography
          variant="Body18/semiBold"
          color={grey900}
          children={dateKR}
        />
        {chipLabel && (
          <Chip size={'small'} color={chipState} label={chipLabel} />
        )}
      </Stack>

      <CardBody cardData={cardData} cardSx={cardSx} />
    </Stack>
  );
}
