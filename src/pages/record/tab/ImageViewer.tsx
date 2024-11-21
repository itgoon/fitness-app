import { Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import Icon from '../../../components/Icon';
import { IimageViewer } from '../types';
import Overlay from '../../../components/custom/Overlay/indext';
import { TouchEvent, useRef, useState } from 'react';
import Button from '../../../components/Button';

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
  imgIndex,
  setImgIndex,
  clickedImg,
  onClose,
  onDelete
}: IimageViewer) {
  const { palette } = useTheme();
  const white = palette.common.white;
  const grey400 = palette.grey[400];
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startPosX, setStartPosX] = useState(0);
  const [startLeft, setStartLeft] = useState(0);
  const [endPosX, setEndPosX] = useState(0);
  const maxMove = 50;
  const myImgRef = useRef<HTMLImageElement>(null);

  if (clickedImg === undefined) return null;
  const { content, imageUrls } = clickedImg;
  const totalCount = imageUrls.length;

  const startDrag = (e: TouchEvent<HTMLImageElement>) => {
    setIsDragging(true);
    setStartPosX(e.touches[0].clientX);
    if (myImgRef.current) {
      const computedStyle = window.getComputedStyle(myImgRef.current);
      setStartLeft(parseInt(computedStyle.getPropertyValue('left'), 10));
    }
  };

  const drag = (e: TouchEvent<HTMLImageElement>) => {
    if (!isDragging) return;
    const offsetX = e.touches[0].clientX - startPosX;

    // 이동범위 제한
    let adjustedOffsetX = offsetX;

    // 최대 이동 범위 초과 시 조정
    if (Math.abs(offsetX) > maxMove) {
      adjustedOffsetX = offsetX > 0 ? maxMove : -maxMove;
    }

    if (myImgRef.current) {
      myImgRef.current.style.left = `${startLeft + adjustedOffsetX}px`;
    }

    setEndPosX(e.touches[0].clientX);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (myImgRef.current) {
      myImgRef.current.style.left = `${startLeft}px`;
    }
    const diff: number = endPosX - startPosX;

    if (diff > maxMove && imgIndex >= 1) {
      setImgIndex((prev) => prev - 1);
    } else if (diff < -maxMove && imgIndex + 1 < imageUrls.length) {
      setImgIndex((prev) => prev + 1);
    }
  };

  return (
    <Overlay bgcolor={'#000'}>
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
        <Stack position={'relative'} gap={2}>
          <img
            style={{ height: 314, objectFit: 'cover' }}
            src={imageUrls[imgIndex]}
            alt={content || 'Image'}
            onTouchStart={(e) => startDrag(e)}
            onTouchMove={(e) => drag(e)}
            onTouchEnd={() => endDrag()}
          />
          <Chip
            variant={'soft'}
            color={'secondary'}
            label={`# ${content}`}
            sx={{ position: 'absolute', bottom: 52, left: 16 }}
          />
          <Typography
            textAlign={'center'}
            color={white}
            variant={'Body15/Bold'}
          >
            <span>{imgIndex + 1} </span>
            <span style={{ color: grey400, fontWeight: 400 }}>
              {` / ${totalCount}`}
            </span>
          </Typography>
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
