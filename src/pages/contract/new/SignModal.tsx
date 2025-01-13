import { Button, Modal, Stack, Typography, useTheme } from '@mui/material';
import ModalContainer from 'src/components/modals/ModalContainer';
import SignatureCanvas from 'react-signature-canvas';
import { useRef } from 'react';

interface SignModalProps {
  onClose: () => void;
  onFileChange: (preview: string, file: File) => void;
}

export default function SignModal({ onClose, onFileChange }: SignModalProps) {
  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  const signRef = useRef<SignatureCanvas | null>(null);

  const onClear = () => {
    if (!signRef.current) return;

    signRef.current.clear();
  };

  const onSave = () => {
    if (!signRef.current) return;

    const dataURL = signRef.current.toDataURL('image/png');

    const decodedURL = dataURL.replace(/^data:image\/\w+;base64,/, '');

    const byteCharacters = atob(decodedURL);

    const byteNumbers = new Array(byteCharacters.length).map((_, i) =>
      byteCharacters.charCodeAt(i)
    );
    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: 'image/png' });

    const file = new File([blob], 'sign.png', { type: 'image/png' });

    onFileChange(dataURL, file);
    onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <ModalContainer sx={{ textAlign: 'center', width: 350, p: 2.5 }}>
        <Stack>
          {/* 헤더 */}
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 2.5 }}
          >
            <Typography
              children="서명을 입력해주세요"
              variant="Body18/semiBold"
              color="primary"
            />
            <Typography
              children="지우기"
              variant="Body16/regular"
              color={light ? 'grey.600' : 'white'}
              onClick={onClear}
            />
          </Stack>

          {/* 캔버스 */}
          <Stack
            sx={{
              backgroundColor: 'grey.300',
              borderRadius: 1.5,
              mb: 1.5,
              height: 240
            }}
          >
            <SignatureCanvas
              ref={signRef}
              canvasProps={{
                style: {
                  height: 230
                }
              }}
              clearOnResize={false}
            />
          </Stack>

          {/* 액션 버튼 */}
          <Stack direction="row" gap={2}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={onClose}
              sx={{ width: '100%', height: 48 }}
            >
              취소
            </Button>
            <Button
              variant="contained"
              color="primary"
              children="서명 완료"
              onClick={onSave}
              sx={{ width: '100%', height: 48 }}
            />
          </Stack>
        </Stack>
      </ModalContainer>
    </Modal>
  );
}
