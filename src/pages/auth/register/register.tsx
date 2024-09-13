import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useBoolean } from "src/hooks/useBoolean";

import FormProvider, { RHFTextField } from "src/components/hookForm";

import {
  Box,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  QontoConnector,
  QontoStepIcon
} from "src/theme/overrides/components/stepper";
import { ReqLogin } from "../../../types/auth";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepFlow from "./StepFlow";
import Button from "src/components/Button";
import { useNavigate } from "react-router";
import Icon from "src/components/Icon";
import { useResponsive } from "src/hooks/useResponsive";

// ----------------------------------------------------------------------

const steps = ["시설 인증", "계정 생성", "가입 완료"];
const stepsChild = [
  { label: "확인", value: "이름을 입력해주세요" },
  { label: "확인", value: "생년월일을 입력해주세요" },
  { label: "본인인증", value: "휴대폰 번호를 입력해주세요" }
];
/**
 * ******************************************************
 * 회원가입 화면
 * ******************************************************
 */
export default function RegisterView() {
  const mdUp = useResponsive("up", "md");
  const password = useBoolean();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    setIsDisabled(true);
    if (data.length > 5) {
      setIsDisabled(false);
    }
  }, [activeStep, data, isDisabled]);

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

  const onNext = () => {
    setActiveStep((prev) => prev + 1);
    setIsDisabled(true);
    setData("");
  };

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = handleSubmit(async (data: ReqLogin) => {
    try {
      // auth.login({
      //   ...data,
      // });
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
    <FormProvider
      methods={methods}
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between"
      }}
    >
      {/* <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ mb: 10 }}
        connector={<QontoConnector />}
      ></Stepper> */}

      {/* <StepFlow activeStep={activeStep} onNext={onNext}>
        <Step1 />
        <Step2 />
        <Step3 />
      </StepFlow> */}

      <Stack spacing={4} paddingLeft={2} paddingRight={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon name={"LeftArrow"} onClick={() => navigate("/login")} />
          <Typography
            variant="h5"
            children="회원가입"
            sx={{ paddingLeft: 15.5 }}
          />
        </Box>
        <Stack gap={4} paddingLeft={0.5} paddingRight={0.5}>
          <Typography
            variant="h3"
            children={stepsChild[activeStep].value}
            fontWeight={600}
          />

          {activeStep === 2 && (
            <>
              <TextField
                fullWidth
                variant="standard"
                label="휴대폰 번호"
                color="primary"
                onChange={(e) => setData(e.target.value)}
              />
            </>
          )}
          {activeStep >= 1 && (
            <>
              <TextField
                fullWidth
                variant="standard"
                label="생년월일"
                placeholder="예) 19900101"
                color="primary"
                onChange={(e) => setData(e.target.value)}
              />
            </>
          )}

          <TextField
            fullWidth
            variant="standard"
            label="이름"
            color="primary"
            onChange={(e) => setData(e.target.value)}
          />
        </Stack>
      </Stack>
      <Button
        fullWidth
        variant="contained"
        color={"primary"}
        onClick={onNext}
        children={stepsChild[activeStep].label}
        disabled={isDisabled}
        sx={{ borderRadius: 0 }}
      />
    </FormProvider>
  );
}
