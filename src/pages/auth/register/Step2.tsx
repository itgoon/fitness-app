import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { RHFTextField } from 'src/components/hookForm';
import { ChangeEvent, useEffect, useState } from 'react';
import { useBoolean } from 'src/hooks/useBoolean';
import Iconify from 'src/components/iconify';
import { StepProps } from './Step1';

const INITIAL_TIMER = 180;
const CODE_LENGTH = 6;

export default function Step2({ onNext }: StepProps) {
  const password = useBoolean();
  const confirmPassword = useBoolean();

  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [isActive, setIsActive] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [canResendCode, setCanResendCode] = useState(false);

  useEffect(() => {
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
    <Stack spacing={2.5}>
      <RHFTextField name="email" label="이메일" placeholder="example@email.com" />
      <RHFTextField
        type="password"
        name="password"
        label="비밀번호"
        placeholder="비밀번호 입력"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography>8 ~ 20자의 영문, 숫자를 조합하여 비밀번호를 입력해주세요.</Typography>
      <RHFTextField
        type="password"
        name="confirm-password"
        label="비밀번호 확인"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={confirmPassword.onToggle} edge="end">
                <Iconify
                  icon={confirmPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <RHFTextField name="name" label="이름" />
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
                transform: 'translateY(-50%)',
              }}
            >
              {formatTimer()}
            </Box>
          </Box>
          <Typography>
            인증번호가 전송되지 않으셨나요?{' '}
            <Button component="span" onClick={resendCode} disabled={!canResendCode}>
              인증번호 재전송
            </Button>
          </Typography>
        </>
      )}

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        onClick={onNext}
      >
        가입 완료
      </Button>

      <Typography sx={{ textAlign: 'center' }}>
        회원가입을 하시면 이용약관 및 개인정보보호 정책에 동의합니다.
      </Typography>
    </Stack>
  );
}
