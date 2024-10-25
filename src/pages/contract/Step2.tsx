import { Box } from '@mui/material';
import ContractTable from '../../components/custom/ContractTable';
import { contractList } from '../../utils/dummy';

export interface StepProps {
  onNext?: () => void;
}
/**
 * ******************************************************
 * 신규 계약서
 * ******************************************************
 */

export default function Step2({ onNext }: StepProps) {
  return (
    <Box>
      <ContractTable title={'결제 정보'} list={contractList}></ContractTable>
    </Box>
  );
}
