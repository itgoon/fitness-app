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
import Button from "src/components/Button";

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
    password: Yup.string().required("비밀번호를 입력해주세요.")
  });

  const methods = useForm<ReqLogin>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      userId: "",
      password: ""
    }
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
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
    <Box>
      <Typography>오늘을 위한 당신의 스마트 비서</Typography>
      LoadingButton
      <Stack>
        <Button>zkzk</Button>
        <Button>apple</Button>
      </Stack>
    </Box>
  );
}
