import { Box, Stack, Typography, useTheme } from '@mui/material';
import Icon from '../../../components/Icon';
import { IimageViewer } from '../types';

const IconStyle = {
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

  if (clickedImg === undefined) return;

  const { content, imageUrls } = clickedImg;
  const totalCount = imageUrls.length;
  return (
    <Box
      position={'fixed'}
      left={0}
      top={0}
      bgcolor={'#000'}
      width={'100%'}
      height={'100vh'}
      zIndex={1}
    >
      <Box display={'flex'} justifyContent={'space-between'} px={2.5} py={3}>
        <Icon name={'FileDownloadSvg'} {...IconStyle} />
        <Box display={'flex'} gap={3}>
          <Icon name={'MoreVertRounded'} {...IconStyle} />
          <Icon name={'CloseRounded'} {...IconStyle} onClick={onClose} />
        </Box>
      </Box>
      <Stack pt={15.5}>
        <img style={{ height: 314 }} src={imageUrls[imgIndex]} />
        <Box display={'flex'} justifyContent={'center'} pt={2}>
          <Typography
            color={white}
            variant={'Body15/Bold'}
            children={imgIndex + 1}
          />
          <Typography
            color={grey400}
            variant={'Body15/light'}
            children={`/ ${totalCount}`}
          />
        </Box>
      </Stack>
    </Box>
  );
}
