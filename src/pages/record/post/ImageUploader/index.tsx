import { Box } from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import useModals from 'src/hooks/useModals';
import UploadButton from './UploadButton';
import PreviewImages from './PreviewImages';
import UploadModal from './UploadModal';

export default function ImageUploader() {
  const { setValue, getValues } = useFormContext();

  const { modals, addModal } = useModals();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onUpload = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      const prevImages = getValues('images') || [];

      setValue('images', [
        ...prevImages,
        {
          file,
          preview: fileUrl
        }
      ]);
    }
  };

  const onClick = () => {
    addModal(<UploadModal onUpload={onUpload} />);
  };

  return (
    <Box
      display="flex"
      gap={2}
      overflow="scroll"
      width="100%"
      pl={2.5}
      pt={3}
      mb={4}
    >
      <UploadButton
        ref={fileInputRef}
        onFileChange={onFileChange}
        onClick={onClick}
      />
      <PreviewImages />

      {modals}
    </Box>
  );
}
