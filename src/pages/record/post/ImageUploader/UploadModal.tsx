import { Stack } from '@mui/material';
import Button from 'src/components/Button';

interface UploadModalProps {
  onUpload: () => void;
}

export default function UploadModal({ onUpload }: UploadModalProps) {
  return (
    <Stack gap={1} px={0.81} zIndex={1}>
      <Stack gap={0.1}>
        <Button
          size={'large'}
          variant={'soft'}
          isTopRadius={true}
          children={'사진 업로드'}
          onClick={onUpload}
        />
        <Button
          size={'large'}
          variant={'soft'}
          isBottomRadius={true}
          children={'사진 촬영'}
        />
      </Stack>
      <Button
        size={'large'}
        variant={'soft'}
        color={'secondary'}
        children={'취소'}
      />
    </Stack>
  );
}
