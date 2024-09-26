import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router';

export default function Step3() {
  const navigate = useNavigate();

  return (
    <Stack spacing={2.5}>
      <Typography sx={{ textAlign: 'center' }}>
        회원가입이 완료 되었습니다!
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        로그인 후 지금 바로 서비스를 이용해 보세요.
      </Typography>
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        onClick={() => navigate('/login')}
      >
        로그인 후 이용하기
      </Button>
    </Stack>
  );
}
