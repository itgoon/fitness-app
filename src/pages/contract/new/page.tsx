import dayjs from 'dayjs';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import Button from 'src/components/Button';
import ButtonWrapper from 'src/components/ButtonWrapper';
import Sizer from 'src/components/common/Sizer';
import ContractTable from 'src/components/contractTable';
import ConfirmModal from 'src/components/modals/ConfirmModal';
import useModals from 'src/hooks/useModals';
import { useState } from 'react';
import { ContractService } from 'src/service';
import SignModal from './SignModal';
import SignCanvas from './SignCanvas';
import SignPreview from './SignPreview';

export default function NewContractPage() {
  const today = dayjs();

  const navigate = useNavigate();

  const id = 4;

  const { modals, addModal, removeModal } = useModals();

  const [signFile, setSignFile] = useState<{
    preview: string;
    file: File;
  } | null>(null);

  console.log(signFile);

  const onFileChange = (preview: string, file: File) => {
    setSignFile((prev) => ({ ...prev, preview, file }));
  };

  const onSubmit = async () => {
    await ContractService.updateContract({ id, sign: signFile });
  };

  const handleSignModal = () => {
    addModal(<SignModal onClose={removeModal} onFileChange={onFileChange} />);
  };

  const handleConfirmModal = () => {
    addModal(
      <ConfirmModal
        onConfirm={onSubmit}
        onClose={removeModal}
        title="서명 등록을 완료하시곘습니까?"
        label="서명 등록"
      />
    );
  };

  return (
    <Sizer>
      <Stack height="100%" justifyContent="space-between">
        <Stack gap={5} sx={{ pt: 4, pb: 15 }}>
          {/* 테이블 */}
          <Stack>
            <Typography variant="Body18/bold" sx={{ mb: 2 }}>
              결제 정보
            </Typography>
            <ContractTable id={id} />
          </Stack>

          {/* 서명 */}
          <Stack>
            <Typography
              display="flex"
              justifyContent="center"
              variant="Body20/semiBold"
              sx={{ mb: 3 }}
            >
              {today.format('YYYY년 MM월 DD일')}
            </Typography>
            {signFile?.preview ? (
              <SignPreview preview={signFile.preview} />
            ) : (
              <SignCanvas onClick={handleSignModal} />
            )}
          </Stack>
        </Stack>
      </Stack>

      {/* 서명 완료 버튼 */}
      <ButtonWrapper>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleConfirmModal}
        >
          서명 완료
        </Button>
      </ButtonWrapper>

      {modals}
    </Sizer>
  );
}
