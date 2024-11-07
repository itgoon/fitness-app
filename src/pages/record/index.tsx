import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import TabPanel from '../../components/custom/TabPanel';
import Header from '../../components/custom/Header';
import WorkoutList from './tab/WorkoutList';
import DietList from './tab/DietList';
import EmptyList from './tab/EmptyList';

export default function Record() {
  const [tabValue, setTabValue] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <Box height={'100%'}>
      <Header stepTitle="기록" />
      <Box height={'calc(100% - 56px)'}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          scrollButtons={false}
          variant="fullWidth"
        >
          <Tab label={'계약서'}></Tab>
          <Tab label={'정책/규정'}></Tab>
        </Tabs>
        <Box height={'calc(100% - 50px)'} padding={2}>
          <TabPanel value={tabValue} index={0}>
            {isEmpty ? <WorkoutList /> : <EmptyList />}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {isEmpty ? <DietList /> : <EmptyList />}
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
