import { Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import Icon from '../../../components/Icon';
import { IimageViewer } from '../types';
import Overlay from '../../../components/custom/Overlay/indext';
import { useState } from 'react';

const IconSx = {
  size: 24,
  color: 'white'
};

/**
 * ******************************************************
 * 기록 화면 => 이미지 뷰어
 * ******************************************************
 */
export default function ImageViewer({
  imgIndex,
  clickedImg,
  onClose
}: IimageViewer) {
  const { palette } = useTheme();
  const white = palette.common.white;
  const grey400 = palette.grey[400];

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  if (clickedImg === undefined) return null;

  const { content, imageUrls } = clickedImg;
  const totalCount = imageUrls.length;
  return (
    <Overlay bgcolor={'#000'}>
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

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
      <Stack pt={15.5} position={'relative'}>
        <img
          style={{ height: 314, objectFit: 'cover' }}
          src={imageUrls[imgIndex]}
          alt={content || 'Image'}
        />
        <Chip
          variant={'soft'}
          color={'secondary'}
          label={`# ${content}`}
          sx={{ position: 'absolute', bottom: 52, left: 16 }}
        />
        <Typography
          pt={2}
          textAlign={'center'}
          color={white}
          variant={'Body15/Bold'}
        >
          <span>{imgIndex + 1} </span>
          <span
            style={{ color: grey400, fontWeight: 400 }}
          >{` / ${totalCount}`}</span>
        </Typography>
      </Stack>
    </Overlay>
  );
}
