import { Box } from '@mui/material';
import StepFlow from '../../components/custom/StepFlow';
import ReservationStep1 from './step/ReservationStep1';
import { useState } from 'react';
import dayjs from 'dayjs';
import { TimeDateFormatKR, getTimeCheck } from '../../utils/formatTime';
import { IReservationList } from './types';
import ReservationStep2 from './step/ReservationStep2';
import ReservationStep3 from './step/ReservationStep3';
import Header from '../../components/custom/Header';
/**
 * ******************************************************
 * 회원 클릭 -> 모달 -> 예약하기 버튼 클릭 ->  레슨 예약 화면
 * ******************************************************
 */
const stepTitle = ['', '레슨 예약', '레슨예약'];
export default function ReservationPage() {
  const [activeStep, setActiveStep] = useState(0);

  const [reservationList, setReservationList] = useState<IReservationList>({
    date: dayjs().format(TimeDateFormatKR),
    time: ''
  });
  const onNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const reservationData = [
    { label: '예약 일자', value: reservationList.date },
    { label: '레슨 시간', value: getTimeCheck(reservationList.time) },
    { label: '레슨/회차', value: '[Lv1] 10회 3회차' },
    { label: '담당 강사', value: '홍길동' }
  ];

  return (
    <>
      <Header stepTitle={stepTitle[activeStep]}></Header>
      <Box height={'100%'}>
        <StepFlow activeStep={activeStep} onNext={onNext}>
          <ReservationStep1
            reservationList={reservationList}
            setReservationList={setReservationList}
            onNext={onNext}
          />
          <ReservationStep2 reservationData={reservationData} onNext={onNext} />
          <ReservationStep3 reservationData={reservationData} onNext={onNext} />
        </StepFlow>
      </Box>
    </>
  );
}
