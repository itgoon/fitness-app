import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { PageNotFoundIllustration } from 'src/assets/illustrations';

import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <MotionContainer sx={{ textAlign: 'center', maxWidth: '410px' }}>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" color="text.primary" sx={{ mb: 2 }}>
          페이지를 찾을 수 없습니다.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          요청하신 페이지가 존재하지 않거나, 접근할 수 없는 페이지입니다. 입력하신 페이지 주소가
          정확한지 확인해 주시기 바랍니다.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <PageNotFoundIllustration
          sx={{
            height: 260,
            my: { xs: 5, sm: 10 },
          }}
        />
      </m.div>

      <Button component={RouterLink} href="/" size="large" variant="contained">
        이전으로 돌아가기
      </Button>
    </MotionContainer>
  );
}
