import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import QrDrawer from '../QrDrawer';

interface CardFrontProps {
  toggleCard: () => void;
}

export default function CardFront({ toggleCard }: CardFrontProps) {
  const [qrDrawerIsOpen, setQrDrawerIsOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        py: 5,
        px: 2.5,
        backfaceVisibility: 'hidden',
        transform: 'rotateY(0deg)'
      }}
    >
      <Stack
        sx={{ height: '100%', justifyContent: 'space-between' }}
        onClick={toggleCard}
      >
        <Stack gap={0.5}>
          <Typography variant="Body14/light" color="#9CAFEC">
            [Lv1] 10회권
          </Typography>
          <Typography variant="Body24/semiBold" color="white">
            리온짐 부천신중동점
          </Typography>
          <Typography variant="Body14/light" color="#9CAFEC">
            2024.08.01 ~ 2024.09.01
          </Typography>
        </Stack>

        <QRCodeSVG
          onClick={(e) => {
            e.stopPropagation();
            setQrDrawerIsOpen(true);
          }}
          value="https://example.com"
          size={100}
          bgColor="white"
          marginSize={2}
        />

        <Stack gap={1}>
          <LinearProgress
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              height: 8,
              '.MuiLinearProgress-bar': {
                backgroundColor: '#fff'
              }
            }}
            variant="determinate"
            value={50}
          />
          <Typography color="white">
            <Box component="span">90</Box>
            <Box component="span" sx={{ color: '#9CAFEC' }}>
              일 후 만료
            </Box>
          </Typography>
        </Stack>
      </Stack>

      <QrDrawer
        isOpen={qrDrawerIsOpen}
        onOpen={() => setQrDrawerIsOpen(true)}
        onClose={() => setQrDrawerIsOpen(false)}
      />
    </Box>
  );
}
