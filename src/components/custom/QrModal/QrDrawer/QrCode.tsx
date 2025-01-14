import { Box, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

export default function QrCode() {
  return (
    <Stack sx={{ gap: 5 }}>
      <Box
        sx={{
          border: '1px solid black',
          width: 256,
          height: 256,
          backgroundColor: 'white',
          p: 0.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto'
        }}
      >
        <QRCodeSVG value="https://example.com" size={240} />
      </Box>

      <Stack sx={{ gap: 0.5, textAlign: 'center', alignItems: 'center' }}>
        <Typography variant="Body24/bold">출입 QR코드</Typography>
        <Typography variant="Body15/regular" sx={{ width: 184 }}>
          입장 시 시설 담당자나 바코드에 QR코드를 보여주세요.
        </Typography>
      </Stack>
    </Stack>
  );
}
