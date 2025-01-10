import { Modal, Stack } from '@mui/material';
import Button from 'src/components/Button';

interface UploadModalProps {
  onClose: () => void;
  onUpload: () => void;
}

export default function UploadModal({ onClose, onUpload }: UploadModalProps) {
  return (
    <Modal open onClose={onClose}>
      <Stack gap={1} px={0.81} justifyContent="end" sx={{ height: '100%' }}>
        <Stack gap={0.1}>
          <Button size="large" variant="soft" isTopRadius onClick={onUpload}>
            사진 업로드
          </Button>
          <Button size="large" variant="soft" isBottomRadius>
            사진 촬영
          </Button>
        </Stack>
        <Button size="large" variant="soft" color="secondary" onClick={onClose}>
          취소
        </Button>
      </Stack>
    </Modal>
  );
}
