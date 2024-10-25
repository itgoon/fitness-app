import { Box } from '@mui/material';
import StepFlow from './StepFlow';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

/**
 * ******************************************************
 * 대시보드 화면 -> 신규 계약서 페이지
 * ******************************************************
 */
export default function ContractView() {
  const [activeStep, setActiveStep] = useState(0);
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  return (
    <Box padding={'40px 20px'}>
      <StepFlow activeStep={activeStep} onNext={onNext}>
        <Step1 onNext={onNext} />
        <Step2 onNext={onNext} />
        <Step3 />
      </StepFlow>
    </Box>
  );
}
