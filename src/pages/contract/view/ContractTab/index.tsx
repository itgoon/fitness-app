import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ContractDto } from 'src/api';
import ContractTable from 'src/components/contractTable';
import ContractTableItem from 'src/components/contractTable/ContractTableItem';
import { ContractService } from 'src/service';

export default function ContractTab() {
  const id = 123;

  const [contract, setContract] = useState<ContractDto | null>(null);

  useEffect(() => {
    loadSingleContract();
  }, []);

  const loadSingleContract = async () => {
    const res = await ContractService.loadSingleContract({ id });

    setContract(res);
  };

  return (
    <>
      <Stack sx={{ pt: 5, pb: 15 }}>
        {/* 테이블 */}
        <Stack sx={{ mb: 3 }}>
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 1,
              px: 1.5
            }}
          >
            <Typography variant="Body18/semiBold" lineHeight="26px">
              작성일
            </Typography>
            <Typography variant="Body18/semiBold" lineHeight="26px">
              더미 데이터
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 1,
              px: 1.5
            }}
          >
            <Typography variant="Body18/semiBold" lineHeight="26px">
              서명
            </Typography>
            <Box sx={{ width: 140, height: 26, backgroundColor: 'black' }} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
