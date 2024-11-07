import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../../../components/custom/TabPanel';
import { useState } from 'react';
import TabTable from './tab/TabTable';
import TabCondition from './tab/TabCondition';
import Header from '../../../components/custom/Header';

export default function ContractView() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box>
      <Header stepTitle="리온짐" />
      <Box>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          scrollButtons={false}
          variant="fullWidth"
        >
          <Tab label={'계약서'}></Tab>
          <Tab label={'정책/규정'}></Tab>
        </Tabs>
        <Box py={5} px={2.5}>
          <TabPanel value={tabValue} index={0}>
            <TabTable />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <TabCondition />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
