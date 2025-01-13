import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Icon from '../../../components/Icon';
import Overlay from '../../../components/custom/Overlay/indext';
import Button from '../../../components/Button';
import CustomCarousel from '../../../components/custom/CustomCarousel/index';
import { useModal } from '../../../hooks/useModal';

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
  onClose,
  onDelete,
  afterChange
}: any) {
  const { openConfirm } = useModal();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  if (clickedImg === undefined || selectedIndex.length === 0) return null;
  const { content, imageUrls } = clickedImg;
  const currentIndex = selectedIndex[0][1];

  return (
    <Overlay bgcolor="#000">
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

      <Stack height="100%" justifyContent="space-between">
        {/* header */}
        <Box display="flex" justifyContent="space-between" px={2.5} py={3}>
          <Icon name="FileDownloadSvg" {...IconSx} />
          <Box display="flex" gap={3}>
            <Icon
              name="MoreVertRounded"
              {...IconSx}
              onClick={() => setIsOverlayOpen((prev) => !prev)}
            />
            <Icon name="CloseRounded" {...IconSx} onClick={onClose} />
          </Box>
        </Box>

        {/* pt={15.5} */}
        <Stack>
          <CustomCarousel
            height={314}
            list={imageUrls}
            content={content}
            imgIndex={currentIndex}
            afterChange={afterChange}
          />
        </Stack>

        <Stack gap={1} px={0.81} minHeight={120} zIndex={999}>
          {isOverlayOpen && (
            <>
              <Button
                children="기록 삭제"
                color="error"
                {...BtnSx}
                onClick={() =>
                  openConfirm({
                    title: '',
                    content: `기록을 삭제하시겠습니까?`,
                    onClick: onDelete,
                    clickMsg: '삭제',
                    closeMsg: '취소',
                    clickColor: 'error'
                  })
                }
              />
              <Button
                children="취소"
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
