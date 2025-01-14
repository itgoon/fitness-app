import { useState } from 'react';
import { Box } from '@mui/material'; // MUI의 Box와 Button을 사용합니다.
import CardBack from './CardBack';
import CardFront from './CardFront';

export default function QrCard() {
  const [isFrontSide, setIsFrontSide] = useState(true);

  const toggleCard = () => {
    setIsFrontSide((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: `
        radial-gradient(circle at 50% 50%, rgba(17, 85, 243, 0.3) 0%, rgba(0, 65, 219, 0.9) 100%),
        conic-gradient(from 37deg at 50% 50%, rgba(0, 30, 191, 0.7) 0deg, rgba(199, 205, 252, 0.1) 360deg),
        conic-gradient(from 217deg at 50% 50%, rgba(0, 30, 191, 0.5) 0deg, rgba(199, 205, 252, 0.3) 360deg)
      `,
        backgroundColor: '#001EBF',
        boxShadow: 12,
        borderRadius: 1,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
        transform: isFrontSide ? 'rotateY(0deg)' : 'rotateY(180deg)'
      }}
    >
      {/* 앞면 */}
      <CardFront toggleCard={toggleCard} />

      {/* 뒷면 */}
      <CardBack toggleCard={toggleCard} />
    </Box>
  );
}
