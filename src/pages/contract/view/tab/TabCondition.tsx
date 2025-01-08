import { Box } from '@mui/material';
import Condition from '../../../../components/custom/Condition';
import { dummyCondition, dummyCondition2 } from '../../../../utils/dummy';

export default function TabCondition() {
  return (
    <Box>
      <Condition title="개인정보 수집 및 이용" children={dummyCondition} />
      <Condition
        title="헬스장 이용 정책 및 규정 "
        children={dummyCondition2}
        layoutSx={{ paddingBottom: 12.5 }}
      />
    </Box>
  );
}
