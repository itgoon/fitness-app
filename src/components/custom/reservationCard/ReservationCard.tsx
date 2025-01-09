import { Chip, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { ScheduleDto } from 'src/api';
import { CSSProperties } from 'react';
import CardBody from './CardBody';
import { IReservationCard } from './types';
import { MontFormatKR } from '../../../utils/formatTime';
import { chipChange } from '../../../utils/chipChange';

interface ReservationCardProps {
  card: ScheduleDto;
  layoutSx?: CSSProperties;
  cardSx?: CSSProperties;
}

export default function ReservationCard({
  card,
  layoutSx,
  cardSx
}: ReservationCardProps) {
  // const theme = useTheme();
  // const light = theme.palette.mode === 'light';
  // const grey900 = light ? theme.palette.grey[900] : 'white';

  // const dateKR = dayjs(card?.date).format(MontFormatKR);

  // const chipState = card?.chipState;
  // const { chipLabel } = chipChange(chipState);

  return (
    <div>123</div>
    // <Stack gap={1.5} sx={{ padding: '8px 20px 32px', ...layoutSx }}>
    //   <Stack direction="row" alignItems="center" gap={1}>
    //     <Typography
    //       variant="Body18/semiBold"
    //       color={grey900}
    //       children={dateKR}
    //     />
    //     {chipLabel && <Chip size="small" color={chipState} label={chipLabel} />}
    //   </Stack>

    //   <CardBody cardData={cardData} cardSx={cardSx} />
    // </Stack>
  );
}
