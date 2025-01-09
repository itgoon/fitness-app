import { useFormContext } from 'react-hook-form';
import { Box } from '@mui/material';
import Icon from 'src/components/Icon';

export default function PreviewImages() {
  const { watch, getValues, setValue } = useFormContext();

  const images = watch('images');

  const onImageDelete = (name: number) => {
    const prevImages = getValues('images') || [];

    const newImages = prevImages.filter((image) => image.preview !== preview);

    setValue('images', newImages);
  };

  return images?.map((image) => (
    <Box
      key={image.preview}
      minWidth={80}
      maxWidth={80}
      height={80}
      position="relative"
    >
      <Icon
        name="DeleteImageSvg"
        size={20}
        sx={{
          position: 'absolute',
          top: -7,
          right: -7
        }}
        onClick={onImageDelete}
      />
      <img
        src={image.preview}
        alt="기록"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 8,
          objectFit: 'cover'
        }}
      />
    </Box>
  ));
}
