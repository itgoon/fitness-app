import { Box } from '@mui/material';
import UploadButton from './UploadButton';
import PreviewImages from './PreviewImages';

export default function ImageUploader() {
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
      <UploadButton />
      <PreviewImages />
    </Box>
  );
}
