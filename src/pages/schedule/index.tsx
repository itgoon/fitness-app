import { Box } from '@mui/material';
import { useState } from 'react';
import WorkOutRecord from './tab/WorkOutRecord';
import ReservationList from './tab/ReservationList';
import {
  dummyMonthWorkoutList,
  dummyReservaitonListCard,
  dummyWorkOutRecordList
} from '../../utils/dummy';
import DateCalendar from '../../components/custom/calendar/DateCalendar';
import Tabs from '../../components/custom/Tabs/Tabs';
import TabPanel from '../../components/custom/Tabs/TabPanel';
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
      <Box pt={3}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          frLabel={'운동 기록'}
          secLabel={'예약 내역'}
        />
        <Box px={2.5} py={3}>
          <TabPanel value={tabValue} index={0}>
            <WorkOutRecord cardDataList={dummyWorkOutRecordList} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <ReservationList cardDataList={dummyReservaitonListCard} />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
