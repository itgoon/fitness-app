import { Box } from '@mui/material';
import AlaramCard from '../../../components/custom/AlaramCard';

export default function WorkOutRecord() {
  return (
    <Box>
      <AlaramCard
        margin={'0'}
        title={
          <span style={{ lineHeight: '24px' }}>
            운동 기록을 찾을 수 없어요 <br /> 오늘부터 기록을 채워보세요.
          </span>
        }
      />
    </Box>
  );
}
