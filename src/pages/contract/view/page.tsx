import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from 'src/components/common/Header';
import Sizer from 'src/components/common/Sizer';
import { Prev } from 'src/components/Icon/HeaderIcon';

export default function ContractViewPage() {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <Header
        left={<Prev onClick={() => navigate(-1)} />}
        title="일단 리온짐"
      />
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
