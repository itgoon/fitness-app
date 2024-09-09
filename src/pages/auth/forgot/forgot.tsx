import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useBoolean } from "src/hooks/useBoolean";

import FormProvider, { RHFTextField } from "src/components/hookForm";

import { useState } from "react";
import { ReqLogin } from "../../../types/auth";
import StepFlow from "../register/StepFlow";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// ----------------------------------------------------------------------

/**
 * ******************************************************
 * 비밀번호 찾기 화면
 * ******************************************************
 */
export default function ForgotView() {
  const LoginSchema = Yup.object().shape({
    userId: Yup.string().required("이메일을 입력해주새요."),
    password: Yup.string().required("비밀번호를 입력해주세요.")
  });

  const methods = useForm<any>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const [activeStep, setActiveStep] = useState(0);

  const onNext = () => {
    setActiveStep((prev) => prev + 1);
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
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {/* 로고 */}

      <StepFlow activeStep={activeStep} onNext={onNext}>
        <Step1 />
        <Step2 />
        <Step3 />
      </StepFlow>
    </FormProvider>
  );
}
