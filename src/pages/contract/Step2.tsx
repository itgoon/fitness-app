import { Stack } from '@mui/material';
import ContractTable from '../../components/custom/ContractTable';
import { contractList } from '../../utils/dummy';
import Sign from '../../components/custom/sign/Sign';
import { useState } from 'react';
import SignPopover from '../../components/custom/sign/SignPopover';

export interface StepProps {
  onNext?: () => void;
}
/**
 * ******************************************************
 * 신규 계약서
 * ******************************************************
 */

export default function Step2({ onNext }: StepProps) {
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [sign, setSign] = useState('클릭해서 서명하기');
  return (
    <Stack gap={5}>
      <ContractTable title={'결제 정보'} list={contractList} />

      <Stack>
        <Sign
          date={'2024년 08월 19일'}
          placeholder={sign}
          onClick={() => setIsSignOpen((prev) => !prev)}
        />
      </Stack>
      <SignPopover
        open={isSignOpen}
        onClose={() => setIsSignOpen(false)}
        onClick={() => console.log('click popover')}
      />
    </Stack>
  );
}
