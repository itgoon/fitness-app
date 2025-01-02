import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { ForbiddenIllustration } from 'src/assets/illustrations';

import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Page403() {
  return (
    <MotionContainer sx={{ textAlign: 'center', maxWidth: '357px' }}>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" color="text.primary" sx={{ mb: 2 }}>
          접근이 거부되었습니다.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography color="text.secondary">
          요청하신 페이지 접근이 거부되었습니다. <br />
          입력하신 페이지 주소가 정확한지 확인해주시기 바랍니다.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
      </m.div>

      <Button component={RouterLink} href="/" size="large" variant="contained">
        이전으로 돌아가기
      </Button>
    </MotionContainer>
  );
}
