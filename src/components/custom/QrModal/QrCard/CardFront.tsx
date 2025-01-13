import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

interface CardFrontProps {
  toggleCard: () => void;
}

export default function CardFront({ toggleCard }: CardFrontProps) {
  return (
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
        onClick={() => console.log('슬라이드')}
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
  );
}
