import { Button, Stack, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import QrCode from './QrCode';
import CenterInfo from './CenterInfo';

interface QrDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function QrDrawer({ isOpen, onOpen, onClose }: QrDrawerProps) {
  const [isQrCode, setIsQrCode] = useState(true);

  const handleClose = () => {
    onClose();
    setIsQrCode(true);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onOpen={onOpen}
      onClose={handleClose}
      aria-hidden="false"
      sx={{ zIndex: 1300 }}
    >
      <Stack
        sx={{
          width: '100%',
          height: 456,
          justifyContent: 'space-between'
        }}
      >
        {isQrCode ? <QrCode /> : <CenterInfo />}

        <Button
          sx={{ color: 'primary.main' }}
          onClick={() => setIsQrCode((prev) => !prev)}
        >
          {isQrCode ? '센터 정보' : 'QR 코드'}
        </Button>
      </Stack>
    </SwipeableDrawer>
  );
}
