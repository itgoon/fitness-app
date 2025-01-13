import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { ContractService } from 'src/service';
import { ContractDto } from 'src/api';
import ContractTableItem from './ContractTableItem';

interface ContractTableProps {
  id: number;
}
export default function ContractTable({ id }: ContractTableProps) {
  const [contract, setContract] = useState<ContractDto | null>(null);

  useEffect(() => {
    loadSingleContract();
  }, []);

  const loadSingleContract = async () => {
    const res = await ContractService.loadSingleContract({ id });

    setContract(res);
  };

  return (
    <Stack sx={{ border: '1px solid', borderColor: 'grey.200' }}>
      <ContractTableItem title="이름" content="김철수" />
      <ContractTableItem title="성별" content="김철수" />
      <ContractTableItem title="레슨" content="김철수" />
      <ContractTableItem title="시작 일자" content="김철수" />
      <ContractTableItem title="유효 일자" content="김철수" />
      <ContractTableItem title="결제 방식" content="김철수" />
      <ContractTableItem title="결제 금액" content="김철수" isLast />
    </Stack>
  );
}
