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
        perspective: '1000px',
        height: '100%'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d', // 3D 변환 효과
          transition: 'transform 0.6s', // 뒤집을 때 애니메이션 적용
          transform: isFrontSide ? 'rotateY(0deg)' : 'rotateY(180deg)' // 카드 뒤집기
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden' // 반대면 숨기기
          }}
        >
          <CardFront toggleCard={toggleCard} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden', // 반대면 숨기기
            transform: 'rotateY(180deg)' // 카드 뒷면은 180도 회전
          }}
        >
          <CardBack toggleCard={toggleCard} />
        </Box>
      </Box>
    </Box>
  );
}
