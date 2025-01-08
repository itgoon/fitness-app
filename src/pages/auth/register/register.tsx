import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useBoolean } from 'src/hooks/useBoolean';

import FormProvider from 'src/components/hookForm';

import { useState } from 'react';

import { useResponsive } from 'src/hooks/useResponsive';
import { Box } from '@mui/material';
import { ReqLogin } from '../../../types/auth';
import StepFlow from '../../../components/custom/StepFlow';
import Header from '../../../components/custom/Header';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
/**
 * ******************************************************
 * 회원가입 화면
 * ******************************************************
 */
export default function RegisterView() {
  const mdUp = useResponsive('up', 'md');
  const password = useBoolean();

  const [data, setData] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const LoginSchema = Yup.object().shape({
    userId: Yup.string().required('이메일을 입력해주새요.'),
    password: Yup.string().required('비밀번호를 입력해주세요.')
  });

  const methods = useForm<ReqLogin>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      userId: '',
      password: ''
    }
  });

  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={() => {}}>
      <Box height="calc(100% - 56px)">
        <StepFlow activeStep={activeStep} onNext={onNext}>
          <Step1 data={data} setData={setData} />
          <Step2 />
          <Step3 />
        </StepFlow>
      </Box>
    </FormProvider>
  );
}
