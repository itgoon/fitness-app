import { Box } from '@mui/material';
import { useState } from 'react';

import ContractStep1 from './step/ContractStep1';
import ContractStep2 from './step/ContractStep2';
import ContractStep3 from './step/ContractStep3';
import Header from '../../../components/custom/Header';
import StepFlow from '../../../components/custom/StepFlow';

/**
 * ******************************************************
 * 대시보드 화면 -> 신규 계약서 페이지
 * ******************************************************
 */
const stepTitle = ['약관 및 규정', '신규 계약서', '레슨 예약'];
export default function MakeContract() {
  const [activeStep, setActiveStep] = useState(0);
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  return (
    <>
      <Header title={stepTitle[activeStep]} />
      <Box padding="40px 20px 0" height="calc(100% - 56px)">
        <StepFlow activeStep={activeStep} onNext={onNext}>
          <ContractStep1 />
          <ContractStep2 />
          <ContractStep3 />
        </StepFlow>
      </Box>
    </>
  );
}
