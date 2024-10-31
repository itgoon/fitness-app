import { Stack } from '@mui/material';
import StepFlow from '../../../components/custom/StepFlow';
import DetailStep1 from './step/DetailStep1';
import { useState } from 'react';
import DetailStep2 from './step/DetailStep2';

export default function CardDetail() {
  const [activeStep, setActiveStep] = useState(0);
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <Stack gap={2.5} px={2.5} height={'100%'}>
      <StepFlow activeStep={activeStep} onNext={onNext}>
        <DetailStep1 onNext={onNext} />
        <DetailStep2 onNext={onNext} />
      </StepFlow>
    </Stack>
  );
}
