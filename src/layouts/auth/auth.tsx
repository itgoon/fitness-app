import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/system';
import SeoIllustration from 'src/assets/illustrations/seoIllustration';

import { useResponsive } from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: '100vh',
      }}
    >
      {mdUp && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            backgroundImage: `url('/assets/background/overlay_3.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backgroundBlendMode: 'overlay',
          }}
        >
          <Stack>
            <Typography variant="h3" color="text.primary" sx={{ mb: 2 }}>
              신경쓸게 많은 매장관리 <br /> 지금 무료로 사용해 보세요!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
              회원가입만 하면 시설관리와 일정관리까지 무료로 이용 가능합니다!
              <br /> 간편한 워크플로우로 번거로웠던 업무를 간편하게 바꿔보세요.
            </Typography>
            <SeoIllustration sx={{ width: '480px', height: '360px' }} />
          </Stack>
        </Box>
      )}

      <Stack
        sx={{
          width: '100%',
          maxWidth: '420px',
          mx: 'auto',
          px: { xs: 2, md: 0 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
