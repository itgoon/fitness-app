import { Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import Button from 'src/components/Button';
import Sizer from 'src/components/common/Sizer';
import Condition from 'src/components/custom/Condition';
import { dummyCondition, dummyCondition2 } from 'src/utils/dummy';

export default function TermsPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/contract/new');
  };

  return (
    <Sizer>
      <Stack gap={3}>
        <Condition title="개인정보 수집 및 이용" children={dummyCondition} />
        <Condition
          title="헬스장 이용 정책 및 규정 "
          children={dummyCondition2}
          layoutSx={{ paddingBottom: 12.5 }}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          아래로 내려 동의하기
        </Button>
      </Stack>
    </Sizer>
  );
}
