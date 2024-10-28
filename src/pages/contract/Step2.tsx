import { Box, Stack, Typography, useTheme } from '@mui/material';
import ContractTable from '../../components/custom/ContractTable';
import { contractList } from '../../utils/dummy';
import { useRef, useState } from 'react';
import SignPopover from '../../components/custom/sign/SignPopover';
import { default as ReactSignatureCanvas } from 'react-signature-canvas';
import Button from '../../components/Button';
import { useModal } from '../../hooks/useModal';

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
  const grey600 = palette.grey[600];
  const blgrey = light ? palette.grey.A200 : grey400;

  // state
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [sign, setSign] = useState({ data: '', original: '' });
  const signRef = useRef<ReactSignatureCanvas>(null);

  // hook
  const { openConfirm } = useModal();

  // 서명 패드에 서명한 내용 지우기
  const clear = () => {
    signRef.current?.clear();
    setIsSigned(false);
  };
  // 서명 사진 데이터 url 얻는 방법
  const getFile = (): string => {
    const data = signRef.current!.toDataURL('image/png');

    return String(data);
  };

  const getOriginalFIle = () => {
    return '';
  };

  const saveSign = () => {
    if (signRef.current && signRef.current.isEmpty()) {
      return;
    } else {
      setSign({ data: getFile(), original: getOriginalFIle() });
      setIsSignOpen(false);
    }
  };
  const signModalClose = () => {
    setSign({ data: '', original: '' });
    setIsSigned(false);
    setIsSignOpen(false);
  };
  return (
    <Stack height={'calc(100% - 24px)'} justifyContent={'space-between'}>
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
                src={sign.data}
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

      {isSigned && sign.data !== '' && (
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
        onClick={saveSign}
      />
    </Stack>
  );
}
