import { Box, Stack, Typography, useTheme } from '@mui/material';
import { IStep } from '../types';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import Button from '../../../components/Button';

export default function ReservationStep2({ reservationData, onNext }: IStep) {
  const { palette } = useTheme();
  const grey600 = palette.grey[600];

  if (!reservationData) return;
  return (
    <Stack height="100%" px={2.5} pt={5} justifyContent="space-between">
      <Stack gap={2}>
        <Typography
          variant="Body20/semiBold"
          children="아래 예약 정보를 확인해주세요"
        />
        <EmptyCard>
          <Stack width="100%" px={2.5} py={1} gap={0.5}>
            <Stack gap={2}>
              {reservationData?.map((data, key) => (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  key={key}
                >
                  <Typography
                    variant="Body16/light"
                    color={grey600}
                    children={data.label}
                  />
                  <Typography variant="Body16/regular" children={data.value} />
                </Box>
              ))}
            </Stack>
          </Stack>
        </EmptyCard>
      </Stack>
      <Button
        size="large"
        variant="contained"
        color="primary"
        children="예약하기"
        onClick={onNext}
      />
    </Stack>
  );
}
