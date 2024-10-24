import Button from '../../components/Button';
import Condition from '../../components/custom/Condition';
import { Stack } from '@mui/material';
import { dummyCondition, dummyCondition2 } from '../../utils/dummy';
import { useEffect, useRef, useState } from 'react';

export interface StepProps {
  onNext?: () => void;
}

export default function Step1({ onNext }: StepProps) {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  //   TODO: 활성화 단계에서 퀄리티를 더 높일 것 동의 버튼 이라거나
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
          sx={{ marginBottom: 3.3 }}
        />
      </div>
    </Stack>
  );
}
