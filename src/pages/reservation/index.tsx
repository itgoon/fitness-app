import { Box, useTheme } from '@mui/material';
import StepFlow from '../../components/custom/StepFlow';
import ReservationStep1 from './step/ReservationStep1';
import { useState } from 'react';
/**
 * ******************************************************
 * 대시보드 화면
 * ******************************************************
 */

export default function ReservationPage() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const [activeStep, setActiveStep] = useState(0);
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  return (
    <Box>
      <StepFlow activeStep={activeStep} onNext={onNext}>
        <ReservationStep1></ReservationStep1>
      </StepFlow>
    </Box>
  );
}
