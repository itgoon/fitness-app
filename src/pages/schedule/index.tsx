import { Box } from '@mui/material';
import { useState } from 'react';
import DateCalendar from '../../components/custom/DateCalendar';
/**
 * ******************************************************
 * 일정 화면
 * ******************************************************
 */
export default function Schedule() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box>
      {/* <Box>
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
      </Box> */}
      <DateCalendar />
    </Box>
  );
}
