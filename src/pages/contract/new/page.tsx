import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'src/components/Button';
import Sizer from 'src/components/common/Sizer';
import ContractTable from 'src/components/custom/ContractTable';
import SignPopover from 'src/components/custom/sign/SignPopover';
import { useModal } from 'src/hooks/useModal';
import { useSign } from 'src/hooks/useSign';
import { contractList } from 'src/utils/dummy';

export default function NewContractPage() {
  const navigate = useNavigate();

  const theme = useTheme();

  const { signRef, sign, isSigned, setSign, clear, setIsSigned, saveSign } =
    useSign();

  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey400 = palette.grey[400];
  const grey600 = light ? palette.grey[600] : 'white';

  const blgrey = light ? palette.grey.A200 : grey400;

  const [isSignOpen, setIsSignOpen] = useState(false);

  const { openConfirm } = useModal();

  const signModalClose = () => {
    setSign({ data: '', original: '' });
    setIsSigned(false);
    setIsSignOpen(false);
  };

  return (
    <Sizer>
      <Stack height="100%" justifyContent="space-between" sx={{ py: 4 }}>
        <Stack gap={5}>
          <ContractTable title="결제 정보" list={contractList} />
          <Stack gap={3}>
            <Typography
              display="flex"
              justifyContent="center"
              variant="Body20/semiBold"
              children="2024년 08월 19일"
            />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor={blgrey}
              height={100}
              borderRadius={0.5}
              border={!isSigned ? `2px solid ${palette.error.darker}` : 'none'}
              onClick={() => setIsSignOpen((prev) => !prev)}
            >
              {isSigned ? (
                <img
                  src={sign?.data}
                  alt="signature"
                  style={{ height: 'inherit', objectFit: 'contain' }}
                />
              ) : (
                <Typography
                  variant="Body18/regular"
                  color={grey600}
                  children="클릭해서 서명하기"
                />
              )}
            </Box>
          </Stack>
        </Stack>
        {isSigned && sign?.data !== '' && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            children="서명 완료"
            onClick={() =>
              openConfirm({
                title: '',
                content: '서명 등록을 완료하시겠습니까?',
                onClick: () => console.log('성공'),
                clickMsg: '서명 등록',
                closeMsg: '취소'
              })
            }
          />
        )}
        <SignPopover
          data={sign?.data}
          signRef={signRef}
          isSigned={isSigned}
          setIsSigned={setIsSigned}
          clear={clear}
          open={isSignOpen}
          onClose={signModalClose}
          onClick={() => {
            saveSign();
            setIsSignOpen(false);
          }}
        />
      </Stack>
    </Sizer>
  );
}
