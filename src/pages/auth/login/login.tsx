import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import Button from 'src/components/Button';
import Icon from 'src/components/Icon';
import FormProvider, { RHFTextField } from 'src/components/hookForm';
import { useAuth } from 'src/hooks/useAuth';
import { LoginSchema } from './_schema';

// ----------------------------------------------------------------------

/**
 * ******************************************************
 * 로그인 화면
 * ******************************************************
 */
export default function LoginView() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    login(data);
    navigate('/dashboard');
  });

  const onKakaoLogin = () => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: 'signinKakao' })
    );
  };

  const onAppleLogin = () => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: 'signinApple' })
    );
  };

  return (
    <Stack
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: '100%',
        px: 2.5,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Stack gap={8}>
        <Stack sx={{ alignItems: 'center', gap: 3 }}>
          <Typography variant="Body20/light" color="white">
            오늘을 위한 당신의 스마트 비서
          </Typography>
          <Icon name="AppLogoSmall" size={186} sx={{ height: 64 }} />
        </Stack>

        <FormProvider methods={methods}>
          <Stack gap={4}>
            <RHFTextField
              name="email"
              placeholder="이메일"
              size="large"
              variant="standard"
              inputProps={{
                sx: {
                  color: 'white',
                  borderBottom: '1px solid',
                  backgroundColor: 'transparent',
                  borderColor: 'grey.300',
                  '&::placeholder': {
                    color: 'primary.lighter'
                  }
                }
              }}
            />
            <RHFTextField
              name="password"
              placeholder="비밀번호"
              size="large"
              variant="standard"
              inputProps={{
                sx: {
                  color: 'white',
                  borderBottom: '1px solid',
                  backgroundColor: 'transparent',
                  borderColor: 'grey.300',
                  '&::placeholder': {
                    color: 'primary.lighter'
                  }
                }
              }}
            />

            <Button
              size="large"
              variant="contained"
              typoVariant="Body15/regular"
              disabled={isSubmitting}
              onClick={onSubmit}
              sx={{
                height: 52,
                backgroundColor: '#ffffff',
                color: 'text.primary'
              }}
            >
              로그인
            </Button>
          </Stack>
        </FormProvider>

        <Stack gap={1.5}>
          <Button
            startIcon="Kakao"
            size="large"
            variant="contained"
            typoVariant="Body15/regular"
            sx={{
              height: 52,
              backgroundColor: '#FEE500',
              color: 'text.primary'
            }}
            onClick={onKakaoLogin}
          >
            카카오 계정으로 시작하기
          </Button>
          <Button
            startIcon="Apple"
            typoVariant="Body15/regular"
            size="large"
            variant="contained"
            sx={{ height: 52 }}
            onClick={onAppleLogin}
          >
            Apple 계정으로 시작하기
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
