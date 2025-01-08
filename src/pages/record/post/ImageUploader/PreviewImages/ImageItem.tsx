import { Box } from '@mui/material';
import Icon from 'src/components/Icon';

interface IImageItem {
  image?: string;
  onClick: (key: number) => void;
}
export default function ImageItem({ image, onClick }: IImageItem) {
  return (
    <Box minWidth={80} maxWidth={80} height={80} position={'relative'}>
      <Icon
        name={'DeleteImageSvg'}
        size={20}
        sx={{
          position: 'absolute',
          top: -7,
          right: -7
        }}
        onClick={onClick}
      />
      <img
        src={image}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 8,
          objectFit: 'cover'
        }}
      />
    </Box>
  );
}
