import { Box, Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { RHFTextField } from 'src/components/hookForm';

const INITIAL_TIMER = 180;
const CODE_LENGTH = 6;

export interface StepProps {
  onNext?: () => void;
}

export default function Step1({ onNext }: StepProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [isActive, setIsActive] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [canResendCode, setCanResendCode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            return 0;
          }

          if (INITIAL_TIMER - prev >= 30) {
            setCanResendCode(true);
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // 인증번호 입력
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, '');
    if (numbersOnly.length <= CODE_LENGTH) {
      setVerificationCode(numbersOnly);
    }
  };

  // 인증하기
  const sendCode = () => {
    setIsActive(true);
  };

  // 인증번호 재전송
  const resendCode = () => {
    setTimer(INITIAL_TIMER);
    setCanResendCode(false);
  };

  // 타이머의 포맷을 설정
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <Stack>
      <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h5">비밀번호를 잊어버리셨나요?</Typography>
        <Typography>
          본인 확인을 위해 계정 정보를 입력해주세요.
          <br /> 휴대폰 번호로 인증코드 6자리가 발송됩니다.
        </Typography>
      </Stack>

      <Stack spacing={2.5}>
        <RHFTextField name="userId" label="이메일" />
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <RHFTextField
            type="number"
            name="phone"
            label="휴대폰 번호"
            placeholder="-를 제외한 숫자를 입력해주세요."
          />
          <Button variant="outlined" onClick={sendCode} sx={{ height: '53px' }}>
            인증하기
          </Button>
        </Box>
        {isActive && (
          <>
            <Box sx={{ position: 'relative' }}>
              <TextField
                placeholder="인증번호 입력"
                value={verificationCode}
                onChange={onChange}
                sx={{ width: '100%' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                {formatTimer()}
              </Box>
            </Box>
            <Typography>
              인증번호가 전송되지 않으셨나요?{' '}
              <Button
                component="span"
                onClick={resendCode}
                disabled={!canResendCode}
              >
                인증번호 재전송
              </Button>
            </Typography>
          </>
        )}
        <Button
          fullWidth
          color="inherit"
          size="large"
          variant="contained"
          onClick={onNext}
        >
          인증 완료
        </Button>
        <Button onClick={() => navigate('/login')}>로그인으로 돌아가기</Button>
      </Stack>
    </Stack>
  );
}
