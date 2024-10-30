import { Box, Divider, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import DateCalendar from '../../components/custom/DateCalendar';
import TabPanel from './tab/TabPanel';
import WorkOutRecord from './tab/WorkOutRecord';
import ReservationList from './tab/ReservationList';
import { dummyMonthWorkoutList } from '../../utils/dummy';
/**
 * ******************************************************
 * 일정 화면
 * ******************************************************
 */
export default function Schedule() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box>
      <DateCalendar workData={dummyMonthWorkoutList} />
      <Divider sx={{ borderBottomWidth: 8 }} />
      <Box pt={3}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          scrollButtons={false}
          variant="fullWidth"
        >
          <Tab label={'운동 기록'}></Tab>
          <Tab label={'예약 내역'}></Tab>
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <WorkOutRecord />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ReservationList />
        </TabPanel>
      </Box>
    </Box>
  );
}
