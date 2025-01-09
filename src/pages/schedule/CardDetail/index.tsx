import { Stack } from '@mui/material';
import { useState } from 'react';
import StepFlow from '../../../components/custom/StepFlow';
import DetailStep1 from './step/DetailStep1';
import DetailStep2 from './step/DetailStep2';

/**
 * ******************************************************
 * 일정 화면 -> 카드 상세
 * ******************************************************
 */
export default function CardDetail() {
  const [activeStep, setActiveStep] = useState(0);

  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <Stack gap={2.5} pt={5} px={2.5} height="calc(100% - 56px)">
        <StepFlow activeStep={activeStep} onNext={onNext}>
          <DetailStep1 selectedCard={selectedCard} />
          <DetailStep2 selectedCard={selectedCard} />
        </StepFlow>
      </Stack>
    </>
  );
}
