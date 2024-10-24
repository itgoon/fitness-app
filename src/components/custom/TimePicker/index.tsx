import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { ITimePicker } from './types';
import { Drawer, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import Button from '../../Button';

export default function TimePicker({
  open,
  onClose,
  title,
  onChange,
  onClick
}: ITimePicker) {
  // ulRef를 HTMLDivElement로 설정
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [centerItem, setCenterItem] = useState<string | null>(null);

  const handleScroll = throttle(() => {
    const containerElement = containerRef.current;

    if (!containerElement) return;

    // containerElement 내에서 'ul' 태그를 찾은 다음 그 안의 'li' 태그들을 선택
    const ulElement = containerElement.querySelector('ul');
    if (!ulElement) return;

    const listItems = ulElement.querySelectorAll('li');
    const centerIndex = Math.floor(listItems.length / 2); // 중앙 위치 계산
    const centerLi = listItems[centerIndex];
    console.log('scroll');
    setCenterItem(centerLi?.textContent || ''); // centerLi가 null일 경우 안전하게 처리
  }, 200); // 200ms마다 실행되도록 제한
  console.log('centerItem: ', centerItem);
  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    // ul 태그가 스크롤될 때 이벤트 처리
    const ulElement = containerElement.querySelector('ul');
    if (!ulElement) return;

    ulElement.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => ulElement.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="bottom"
      sx={{
        '.MuiPaper-root': { padding: '32px 20px 20px !important', gap: 3 }
      }}
    >
      <Typography variant="Body20/semiBold" children={title} />
      <MultiSectionDigitalClock
        ref={containerRef}
        timeSteps={{ minutes: 1 }}
        views={['hours', 'minutes']}
        onChange={onChange}
      />
      <Button
        size="large"
        variant="contained"
        color="primary"
        children={'저장'}
        onClick={onClick}
      />
    </Drawer>
  );
}
