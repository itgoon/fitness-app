import { Box } from '@mui/material';
import { useState } from 'react';

import StepFlow from '../../components/custom/StepFlow';
import ContractStep1 from './step/ContractStep1';
import ContractStep2 from './step/ContractStep2';
import ContractStep3 from './step/ContractStep3';
import Header from '../../components/custom/Header';

/**
 * ******************************************************
 * 대시보드 화면 -> 신규 계약서 페이지
 * ******************************************************
 */
const stepTitle = ['약관 및 규정', '신규 계약서', '레슨 예약'];
export default function Contract() {
  const [activeStep, setActiveStep] = useState(0);
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  return (
    <>
      <Header stepTitle={stepTitle[activeStep]}></Header>
      <Box padding={'40px 20px 0'} height={'100%'}>
        <StepFlow activeStep={activeStep} onNext={onNext}>
          <ContractStep1 onNext={onNext} />
          <ContractStep2 onNext={onNext} />
          <ContractStep3 />
        </StepFlow>
      </Box>
    </>
  );
}
