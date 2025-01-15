import dayjs from 'dayjs';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import Button from 'src/components/Button';
import ButtonWrapper from 'src/components/ButtonWrapper';
import Sizer from 'src/components/common/Sizer';
import ContractTable from 'src/components/contractTable';
import ConfirmModal from 'src/components/modals/ConfirmModal';
import useModals from 'src/hooks/useModals';
import { useEffect, useState } from 'react';
import { ContractService } from 'src/service';
import { paths } from 'src/routes/paths';
import ContractTableItem from 'src/components/contractTable/ContractTableItem';
import { ContractDto } from 'src/api';
import SignModal from './SignModal';
import SignCanvas from './SignCanvas';
import SignPreview from './SignPreview';

export default function NewContractPage() {
  const id = 123;

  const today = dayjs();

  const navigate = useNavigate();

  const { modals, addModal, removeModal } = useModals();

  const [contract, setContract] = useState<ContractDto | null>(null);

  const [signFile, setSignFile] = useState<{
    preview: string;
    file: File;
  } | null>(null);

  useEffect(() => {
    loadSingleContract();
  }, []);

  const loadSingleContract = async () => {
    const res = await ContractService.loadSingleContract({ id });

    setContract(res);
  };

  const onFileChange = (preview: string, file: File) => {
    setSignFile((prev) => ({ ...prev, preview, file }));
  };

  const onSubmit = async () => {
    // await ContractService.updateContract({ id, sign: signFile });

    navigate(paths.contract.success);
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
      <Stack sx={{ pt: 4, pb: 15 }}>
        {/* 테이블 */}
        <Stack sx={{ mb: 5 }}>
          <Typography variant="Body18/bold" sx={{ mb: 2 }}>
            결제 정보
          </Typography>
          <ContractTable>
            <ContractTableItem title="이름" content="더미 데이터" />
            <ContractTableItem title="성별" content="더미 데이터" />
            <ContractTableItem title="레슨" content="더미 데이터" />
            <ContractTableItem title="시작 일자" content="더미 데이터" />
            <ContractTableItem title="유효 일자" content="더미 데이터" />
            <ContractTableItem title="결제 방식" content="더미 데이터" />
            <ContractTableItem title="결제 금액" content="더미 데이터" isLast />
          </ContractTable>
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

      {/* 서명 완료 버튼 */}
      <ButtonWrapper>
        <Button
          size="large"
          variant="contained"
          color="primary"
          disabled={!signFile}
          onClick={handleConfirmModal}
        >
          서명 완료
        </Button>
      </ButtonWrapper>

      {modals}
    </Sizer>
  );
}
