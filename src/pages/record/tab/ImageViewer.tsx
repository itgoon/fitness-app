import { Box, Stack } from '@mui/material';
import Icon from '../../../components/Icon';
import { IimageViewer } from '../types';
import Overlay from '../../../components/custom/Overlay/indext';
import { useState } from 'react';
import Button from '../../../components/Button';
import CustomCarousel from '../../../components/custom/CustomCarousel/index';

const IconSx = {
  size: 24,
  color: 'white'
};
const BtnSx: {
  size: 'small' | 'medium' | 'large';
  variant: 'soft';
} = {
  size: 'large',
  variant: 'soft'
};

/**
 * ******************************************************
 * 기록 화면 => 이미지 뷰어
 * ******************************************************
 */
export default function ImageViewer({
  clickedImg,
  selectedIndex,
  setSelectedIndex,
  onClose,
  onDelete
}: IimageViewer) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  if (clickedImg === undefined) return null;
  const { content, imageUrls } = clickedImg;

  const handleAfterChange = (index) => {
    setSelectedIndex((prevState: number[][]) => {
      const currentState = prevState[0] || [0, 0]; // 현재 상태의 첫 번째 요소 가져오기
      return [[currentState[0], index]]; // 2차원 배열 형태로 반환
    });
  };
  const currentIndex = selectedIndex[0][1];
  return (
    <Overlay bgcolor="#000">
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

      <Stack height={'100%'} justifyContent={'space-between'}>
        {/* header */}
        <Box display={'flex'} justifyContent={'space-between'} px={2.5} py={3}>
          <Icon name={'FileDownloadSvg'} {...IconSx} />
          <Box display={'flex'} gap={3}>
            <Icon
              name={'MoreVertRounded'}
              {...IconSx}
              onClick={() => setIsOverlayOpen((prev) => !prev)}
            />
            <Icon name={'CloseRounded'} {...IconSx} onClick={onClose} />
          </Box>
        </Box>

        {/* pt={15.5} */}
        <Stack>
          <CustomCarousel
            height={314}
            list={imageUrls}
            content={content}
            imgIndex={currentIndex}
            afterChange={handleAfterChange}
          />
        </Stack>

        <Stack gap={1} px={0.81} minHeight={120} zIndex={999}>
          {isOverlayOpen && (
            <>
              <Button
                children={'기록 삭제'}
                color={'error'}
                {...BtnSx}
                onClick={onDelete}
              />
              <Button
                children={'취소'}
                {...BtnSx}
                onClick={() => setIsOverlayOpen((prev) => !prev)}
              />
            </>
          )}
        </Stack>
      </Stack>
    </Overlay>
  );
}
