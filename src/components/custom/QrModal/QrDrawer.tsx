import { Box, Stack, SwipeableDrawer, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

interface QrDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function QrDrawer({ isOpen, onOpen, onClose }: QrDrawerProps) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      aria-hidden="false"
      sx={{ zIndex: 1300 }}
    >
      <Stack
        sx={{
          width: '100%',
          height: 456,
          gap: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            border: '1px solid black',
            width: 256,
            height: 256,
            backgroundColor: 'white',
            p: 0.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
    </SwipeableDrawer>
  );
}
