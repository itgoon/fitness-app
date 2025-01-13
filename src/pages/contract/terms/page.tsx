import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CenterPolicyDto } from 'src/api';
import Button from 'src/components/Button';
import Sizer from 'src/components/common/Sizer';
import TermsContent from 'src/components/Terms/TermsContent';
import TermsTitle from 'src/components/Terms/TermsTitle';
import { paths } from 'src/routes/paths';
import { CenterService } from 'src/service';

export default function TermsPage() {
  const navigate = useNavigate();

  const [terms, setTerms] = useState<CenterPolicyDto | null>(null);

  const onClick = () => {
    navigate(paths.contract.new);
  };

  useEffect(() => {
    loadTerms();
  }, []);

  const loadTerms = async () => {
    const res = await CenterService.loadCenterPolicy();

    setTerms(res);
  };

  return (
    <Sizer>
      <Stack sx={{ pt: 5, height: '100%' }}>
        <Stack gap={3} sx={{ flex: 1 }}>
          <TermsTitle>개인정보 수집 및 이용</TermsTitle>
          <TermsContent>{terms?.personalInfo}</TermsContent>

          <TermsTitle>헬스장 이용 정책 및 규정</TermsTitle>
          <TermsContent>{terms?.provision}</TermsContent>
        </Stack>

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
