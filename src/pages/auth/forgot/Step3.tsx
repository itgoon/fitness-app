import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router';

export default function Step3() {
  const navigate = useNavigate();

  return (
    <Stack>
      <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h5">비밀번호가 재설정 되었습니다.</Typography>
        <Typography>로그인 페이지로 이동하여 다시 로그인해주세요.</Typography>
      </Stack>

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        onClick={() => navigate('/login')}
      >
        로그인 하기
      </Button>
    </Stack>
  );
}
