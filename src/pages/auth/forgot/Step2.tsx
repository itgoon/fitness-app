import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography
} from '@mui/material';
import { RHFTextField } from 'src/components/hookForm';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/useBoolean';

export interface StepProps {
  onNext?: () => void;
}

export default function Step2({ onNext }: StepProps) {
  const password = useBoolean();
  const confirmPassword = useBoolean();

  return (
    <Stack>
      <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h5" children={'비밀번호 재설정'} />
        <Typography>
          변경하시는 계정이 아래 계정이 맞는지 확인 후
          <br /> 변경하실 새 비밀번호를 입력해주세요.
        </Typography>
      </Stack>

      <Stack spacing={2.5}>
        <RHFTextField name="userId" disabled />
        <RHFTextField
          type="password"
          name="password"
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify
                    icon={
                      password.value
                        ? 'solar:eye-bold'
                        : 'solar:eye-closed-bold'
                    }
                  />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Typography
          children={'8 ~ 20자의 영문, 숫자를 조합하여 비밀번호를 입력해주세요.'}
        />
        <RHFTextField
          type="password"
          name="confirm-password"
          label="비밀번호 확인"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={confirmPassword.onToggle} edge="end">
                  <Iconify
                    icon={
                      confirmPassword.value
                        ? 'solar:eye-bold'
                        : 'solar:eye-closed-bold'
                    }
                  />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          fullWidth
          color="inherit"
          size="large"
          variant="contained"
          type="submit"
          onClick={onNext}
          children={'비밀번호 변경'}
        />
      </Stack>
    </Stack>
  );
}
