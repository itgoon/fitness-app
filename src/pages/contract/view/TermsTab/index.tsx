import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CenterPolicyDto } from 'src/api';
import TermsContent from 'src/components/Terms/TermsContent';
import TermsTitle from 'src/components/Terms/TermsTitle';
import { CenterService } from 'src/service';

export default function TermsTab() {
  const [terms, setTerms] = useState<CenterPolicyDto | null>(null);

  useEffect(() => {
    loadTerms();
  }, []);

  const loadTerms = async () => {
    const res = await CenterService.loadCenterPolicy();

    setTerms(res);
  };

  return (
    <Stack sx={{ pt: 5 }}>
      <Stack gap={3}>
        <TermsTitle>개인정보 수집 및 이용</TermsTitle>
        <TermsContent>{terms?.personalInfo}</TermsContent>

        <TermsTitle>헬스장 이용 정책 및 규정</TermsTitle>
        <TermsContent>{terms?.provision}</TermsContent>
      </Stack>
    </Stack>
  );
}
