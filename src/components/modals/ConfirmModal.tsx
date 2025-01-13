import { Button, Modal, Stack, Typography } from '@mui/material';
import ModalContainer from './ModalContainer';

interface ConfirmModalProps {
  onClose: VoidFunction;
  onConfirm: any;
  title: string;
  description?: React.ReactNode;
  label?: string;
}

export default function ConfirmModal({
  onClose,
  onConfirm,
  title,
  description,
  label
}: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <ModalContainer
        sx={{ textAlign: 'center', width: 350, px: 2.5, pt: 5, pb: 2.5 }}
      >
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          {/* 타이틀 */}
          <Typography color="text.primary">{title}</Typography>

          {/* 설명 */}
          {description && (
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          )}
        </Stack>

        {/* 액션 */}
        <Stack flexDirection="row" gap={1}>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{ height: 48 }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleConfirm}
            sx={{ height: 48 }}
          >
            {label || '확인'}
          </Button>
        </Stack>
      </ModalContainer>
    </Modal>
  );
}
