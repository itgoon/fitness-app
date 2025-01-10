import { Box, Stack, Typography } from '@mui/material';
import Button from 'src/components/Button';

export default function ReservationPage() {
  return (
    <Box>
      <Typography
        color="grey.900"
        variant="Body18/semiBold"
        children="레슨 시간을 선택해주세요."
      />

      <Stack px={2.5} gap={3}>
        <Button
          typoVariant="Body18/semiBold"
          size="large"
          variant="contained"
          color="primary"
        >
          다음
        </Button>
      </Stack>
    </Box>
  );
}
