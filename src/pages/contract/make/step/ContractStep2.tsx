import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useModal } from '../../../../hooks/useModal';
import { contractList } from '../../../../utils/dummy';
import ContractTable from '../../../../components/custom/ContractTable';
import SignPopover from '../../../../components/custom/sign/SignPopover';
import Button from '../../../../components/Button';
import { useSign } from '../../../../hooks/useSign';

export interface StepProps {
  onNext?: () => void;
}
/**
 * ******************************************************
 * 신규 계약서
 * ******************************************************
 */

export default function Step2({ onNext }: StepProps) {
  // theme
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey400 = palette.grey[400];
  const grey600 = light ? palette.grey[600] : 'white';

  const blgrey = light ? palette.grey.A200 : grey400;

  // state
  const [isSignOpen, setIsSignOpen] = useState(false);

  // hook
  const { signRef, sign, isSigned, setSign, clear, setIsSigned, saveSign } =
    useSign();

  const { openConfirm } = useModal();

  const signModalClose = () => {
    setSign({ data: '', original: '' });
    setIsSigned(false);
    setIsSignOpen(false);
  };

  return (
    <Stack height={'100%'} justifyContent={'space-between'}>
      <Stack gap={5}>
        <ContractTable title={'결제 정보'} list={contractList} />
        <Stack gap={3}>
          <Typography
            display={'flex'}
            justifyContent={'center'}
            variant={'Body20/semiBold'}
            children={'2024년 08월 19일'}
          />
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
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
                children={'클릭해서 서명하기'}
              />
            )}
          </Box>
        </Stack>
      </Stack>

      {isSigned && sign?.data !== '' && (
        <Button
          size={'large'}
          variant={'contained'}
          color={'primary'}
          children={'서명 완료'}
          onClick={() =>
            openConfirm({
              title: '',
              content: '서명 등록을 완료하시겠습니까?',
              onClick: onNext,
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
  );
}
