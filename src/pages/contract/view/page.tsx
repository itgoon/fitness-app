import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import Sizer from 'src/components/common/Sizer';

export default function ContractViewPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <Box pt={3}>
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
          <Box py={3}>
            {tabValue === 0 && '계약서'}
            {tabValue === 1 && '정책/규정'}
          </Box>
        </Sizer>
      </Box>
    </>
  );
}
