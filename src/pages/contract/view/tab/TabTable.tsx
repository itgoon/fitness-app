import { Box, Stack, Typography, useTheme } from '@mui/material';
import ContractTable from '../../../../components/custom/ContractTable';
import { contractList } from '../../../../utils/dummy';
import { useSignContext } from '../../../../hooks/useSign';

export default function TabTable() {
  const { sign } = useSignContext();
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  // style
  const singSx = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 1,
    px: 1.5,
    '.MuiTypography-root': {
      fontSize: 18,
      fontWeight: 600,
      color: light ? 'black' : 'white'
    }
  };

  return (
    <Stack gap={3}>
      <ContractTable title={'결제 정보'} list={contractList} />

      <Stack gap={0.5}>
        <Box sx={{ ...singSx }}>
          <Typography children={'작성일'} />
          <Typography children={'2024년 08월 19일'} />
        </Box>
        <Box sx={{ ...singSx }}>
          {/* TODO: 임의로 높이 변경 */}
          <Typography children={'서명'} />
          {sign?.data && (
            <img
              src={sign?.data}
              alt="signature"
              style={{ width: 150, height: 43, objectFit: 'contain' }}
            />
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
