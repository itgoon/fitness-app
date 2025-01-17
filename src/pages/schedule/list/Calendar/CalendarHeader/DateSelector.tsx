import { Box, Stack } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function DateSelector() {
  const yearRef = useRef<HTMLDivElement | null>(null);

  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    if (!yearRef.current) return;

    let scrollTimeout: NodeJS.Timeout;

    const scrollEvent = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);

      // 스크롤 멈춤 감지 (300ms 후 실행)
      scrollTimeout = setTimeout(() => {
        if (!isScrolling.current) {
          console.log('스크롤 멈춤');
        }
      }, 250);

      // 스크롤이 멈추면 가까운 요소에 붙기

      // 그 가까운 요소를 선택된 요소로 설정

      isScrolling.current = false;
    };

    yearRef.current.addEventListener('scroll', scrollEvent);

    return () => {
      yearRef.current?.removeEventListener('scroll', scrollEvent);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: 216,
        backgroundColor: 'grey.100',
        px: 1,
        py: 2.5
      }}
    >
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        {/* 연도 셀렉터 */}
        <Stack
          sx={{
            positon: 'relative',
            width: '100%',
            height: '100%'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: 44,
              backgroundColor: 'background.paper',
              borderRadius: 1
            }}
          />
          <Stack
            ref={yearRef}
            sx={{ zIndex: 2, width: '100%', overflowY: 'scroll' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              2021년
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              2022년
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              2023년
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              2024년
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              2025년
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              2026년
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
