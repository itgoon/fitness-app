import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBoolean } from "src/hooks/useBoolean";

import FormProvider, { RHFTextField } from "src/components/hookForm";
import Iconify from "src/components/iconify";

import { Box, Checkbox } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "src/hooks/useAuth";
import { ReqLogin } from "../../../types/auth";

// ----------------------------------------------------------------------

/**
 * ******************************************************
 * 로그인 화면
 * ******************************************************
 */
export default function LoginView() {
  const navigate = useNavigate();
  const { auth, login } = useAuth();
  const password = useBoolean();

  useEffect(() => {
    if (!auth?.isLoggedIn) return;

    navigate("/dashboard");
  }, [auth]);
  const LoginSchema = Yup.object().shape({
    userId: Yup.string().required("이메일을 입력해주새요."),
    password: Yup.string().required("비밀번호를 입력해주세요."),
  });

  const methods = useForm<ReqLogin>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data: ReqLogin) => {
    console.log({ data });
    try {
      login(data);
      // const { meta } = await auth.login({
      //   ...data,
      // });
      // if (meta.errCode !== 0) {
      //   alert(meta.errMsg ? meta.errMsg : '관리자에게 문의 바랍니다.');
      // }
    } catch (err) {
      // const { meta } = err.response.data;
      // if (meta.errCode !== 0) {
      //   alert(meta.errMsg ? meta.errMsg : '관리자에게 문의 바랍니다.');
      // }
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={0.5} sx={{ mb: 5 }}>
        <Typography variant="h4" color="text.primary">
          로그인
        </Typography>
        <Typography variant="body2" color="text.secondary">
          아직 계정이 없으신가요?{" "}
          <Typography
            component="span"
            variant="subtitle2"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            이메일 계정으로 가입
          </Typography>
        </Typography>
      </Stack>

      <Stack spacing={3} sx={{ mb: 1.5 }}>
        <RHFTextField name="userId" label="이메일" />
        <RHFTextField
          name="password"
          label="비밀번호"
          type={password.value ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify
                    icon={
                      password.value
                        ? "solar:eye-bold"
                        : "solar:eye-closed-bold"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox />
          <Typography variant="body2" color="text.primary">
            로그인 상태 유지
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="info.dark"
          onClick={() => navigate("/forgot")}
          sx={{ cursor: "pointer" }}
        >
          비밀번호를 잊으셨나요?
        </Typography>
      </Box>

      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        로그인
      </LoadingButton>
    </FormProvider>
  );
}
