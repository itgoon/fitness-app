import { Modal, Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import Button from 'src/components/Button';

interface PreviewModalProps {
  files: FileList;
  onClose: () => void;
}

export default function PreviewModal({ files, onClose }: PreviewModalProps) {
  const file = files[0];

  const fileUrl = URL.createObjectURL(file);

  const { setValue, getValues } = useFormContext();

  const onClick = () => {
    const prevImages = getValues('images') || [];

    setValue('images', [
      ...prevImages,
      {
        file,
        preview: fileUrl
      }
    ]);

    onClose();
  };

  return (
    <Modal open>
      {/* 슬라이더 */}
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white'
        }}
      >
        <Stack>
          {/* 이미지 */}
          <img src={fileUrl} alt="기록" />
          {/* 인풋 */}
          <TextField />
        </Stack>

        {/* 제출 버튼 */}
        <Button onClick={onClick}>사진 등록</Button>
      </Stack>
    </Modal>
  );
}
