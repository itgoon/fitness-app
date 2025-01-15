import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import Sizer from 'src/components/common/Sizer';
import ContractTab from './ContractTab';
import TermsTab from './TermsTab';

export default function ContractViewPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        scrollButtons={false}
        variant="fullWidth"
      >
        <Tab label="계약서" />
        <Tab label="정책/규정" />
      </Tabs>

      <Sizer>
        {tabValue === 0 && <ContractTab />}
        {tabValue === 1 && <TermsTab />}
      </Sizer>
    </>
  );
}
