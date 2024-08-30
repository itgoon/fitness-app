import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { RHFTextField } from 'src/components/hookForm';

export interface StepProps {
  onNext?: () => void;
}

export default function Step1({ onNext }: StepProps) {
  return (
    <Stack spacing={3}>
      <RHFTextField
        name="store"
        label="업체 명"
        placeholder="지점 혹은 센터 이름을 입력해주세요."
      />
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <RHFTextField
          type="number"
          name="business-number"
          label="사업자등록번호"
          placeholder="`-`를 제외한 숫자를 입력해주세요."
        />
        <Button variant="outlined" sx={{ height: '53px' }}>
          인증하기
        </Button>
      </Box>

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        onClick={onNext}
      >
        다음
      </Button>

      <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
        회원가입을 하시면 <Link to="/">이용약관</Link> 및 <Link to="/">개인정보보호 정책</Link>에
        동의합니다.
      </Typography>
    </Stack>
  );
}
