import { useFormContext } from 'react-hook-form';
import ImageItem from './ImageItem';

export default function PreviewImages() {
  const { watch, getValues, setValue } = useFormContext();

  const images = watch('images');

  const onImageDelete = (name: number) => {
    const prevImages = getValues('images') || [];

    const newImages = prevImages.filter((image) => image.name !== name);

    setValue('images', newImages);
  };

  return images?.map((image) => (
    <ImageItem
      key={image.name}
      image={image}
      onClick={() => onImageDelete(image.name)}
    />
  ));
}
