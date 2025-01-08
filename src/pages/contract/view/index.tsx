import { Box } from '@mui/material';
import { useState } from 'react';
import TabTable from './tab/TabTable';
import TabCondition from './tab/TabCondition';
import Header from '../../../components/custom/Header';
import Tabs from '../../../components/custom/Tabs/Tabs';
import TabPanel from '../../../components/custom/Tabs/TabPanel';

export default function ContractView() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box>
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        frLabel="계약서"
        secLabel="정책/규정"
      />
      <Box py={5} px={2.5}>
        <TabPanel value={tabValue} index={0}>
          <TabTable />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <TabCondition />
        </TabPanel>
      </Box>
    </Box>
  );
}
