import { Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { dummyCondition, dummyCondition2 } from '../../../../utils/dummy';
import Condition from '../../../../components/custom/Condition';
import Button from '../../../../components/Button';

export interface StepProps {
  onNext?: () => void;
}
/**
 * ******************************************************
 * 대시보드 -> 약관 및 규정
 * ******************************************************
 */
export default function Step1({ onNext }: StepProps) {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsBtnVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.09
      }
    );

    if (btnRef.current) {
      observer.observe(btnRef.current);
    }

    return () => {
      if (btnRef.current) {
        observer.unobserve(btnRef.current);
      }
    };
  }, []);

  return (
    <Stack gap={3}>
      <Condition title={'개인정보 수집 및 이용'} children={dummyCondition} />
      <Condition
        title={'헬스장 이용 정책 및 규정 '}
        children={dummyCondition2}
        layoutSx={{ paddingBottom: 12.5 }}
      />
      <div ref={btnRef}>
        <Button
          size={'large'}
          disabled={!isBtnVisible}
          variant={'contained'}
          color={'primary'}
          onClick={onNext}
          children={'아래로 내려 동의하기'}
        />
      </div>
    </Stack>
  );
}
