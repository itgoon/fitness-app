import { Stack } from '@mui/material';
import StepFlow from '../../../components/custom/StepFlow';
import DetailStep1 from './step/DetailStep1';
import { useState } from 'react';
import DetailStep2 from './step/DetailStep2';
import { useCardContext } from '../../../hooks/useCard';
import Header from '../../../components/custom/Header';
import dayjs from 'dayjs';

/**
 * ******************************************************
 * 일정 화면 -> 카드 상세
 * ******************************************************
 */
export default function CardDetail() {
  const [activeStep, setActiveStep] = useState(0);
  const { selectedCard } = useCardContext();
  const stepTitle = [
    dayjs(selectedCard.date).format('MM월 DD일 dddd'),
    '레슨 예약'
  ];
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  return (
    <>
      <Header isStart={true} stepTitle={stepTitle[activeStep]} />
      <Stack gap={2.5} pt={5} px={2.5} height={'calc(100% - 56px)'}>
        <StepFlow activeStep={activeStep} onNext={onNext}>
          <DetailStep1 selectedCard={selectedCard} />
          <DetailStep2 selectedCard={selectedCard} />
        </StepFlow>
      </Stack>
    </>
  );
}
