import { Box, Stack, Typography } from '@mui/material';
import { ScheduleDto } from 'src/api';
import dayjs from 'dayjs';
import { getTimeCheck } from 'src/utils/formatTime';
import CardTitle from 'src/components/custom/Card/CardTitle';
import CardBody from 'src/components/custom/Card/CardBody';
import CardHeader from 'src/components/custom/Card/CardHeader';
import CardInfo from 'src/components/custom/Card/CardInfo';
import CardIcon from 'src/components/custom/Card/CardIcon';

interface IReservationData {
  list: ScheduleDto[];
  onClick: (id: number) => void;
}

export default function ReservationData({ list, onClick }: IReservationData) {
  return (
    <Stack gap={2}>
      {list?.map((item, key) => (
        <Box key={key} sx={{ py: 1.5 }}>
          <CardHeader>
            {dayjs(item.schDate).format('M월 DD일 ddd요일')}
          </CardHeader>

          <CardBody onClick={() => onClick(item.schSeq)}>
            <CardIcon iconName="Red" />

            <Stack gap={1}>
              <CardTitle>{getTimeCheck(item.schStartTime)}</CardTitle>

              <Stack gap={0.5}>
                <CardInfo iconName="LocationOn">
                  {(item.center as any).centerNm}
                </CardInfo>

                <CardInfo iconName="Receipt">
                  <Box sx={{ display: 'flex', gap: 0.75 }}>
                    <Typography variant="Body14/regular" color="grey.900">
                      {(item.center as any).centerNm}
                    </Typography>
                    <Typography variant="Body14/regular" color="#BDBDBD">
                      |
                    </Typography>
                    <Typography variant="Body14/regular" color="grey.900">
                      {(item.empMember as any).mbrNm} 강사
                    </Typography>
                  </Box>
                </CardInfo>
              </Stack>
            </Stack>
          </CardBody>
        </Box>
      ))}
    </Stack>
  );
}
