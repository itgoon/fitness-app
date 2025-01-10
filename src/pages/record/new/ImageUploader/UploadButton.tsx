import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Icon from 'src/components/Icon';
import useModals from 'src/hooks/useModals';
import UploadModal from './UploadModal';
import PreviewModal from './PreviewModal';

export default function UploadButton() {
  const { palette } = useTheme();

  const { watch } = useFormContext();

  const { modals, addModal, removeModal, clearModal } = useModals();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      addModal(<PreviewModal files={files} onClose={clearModal} />);
    }
  };

  const onUpload = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const onClick = () => {
    addModal(<UploadModal onUpload={onUpload} onClose={removeModal} />);
  };

  return (
    <>
      <Stack
        minWidth={80}
        height={80}
        border="1px solid"
        borderColor="grey.200"
        borderRadius={1}
        justifyContent="center"
        alignItems="center"
        onClick={onClick}
      >
        <Icon name="CameraSvg" size={24} />
        <Box>
          <Typography color="primary.light" variant="Body14/light">
            {watch('images')?.length}
          </Typography>
          <Typography
            color={palette.mode === 'light' ? 'grey.600' : 'white'}
            variant="Body14/light"
          >
            /10
          </Typography>
        </Box>
      </Stack>

      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        style={{ display: 'none' }}
      />

      {modals}
    </>
  );
}
