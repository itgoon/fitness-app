import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router';
import dayjs from 'dayjs';
import WorkOutRecord from './WorkOutRecord';
import ReservationList from './ReservationList';
import { dummyMonthWorkoutList } from '../../utils/dummy';
import DateCalendar from '../../components/custom/calendar/DateCalendar';
import Divider from '../../components/custom/Divider';

/**
 * ******************************************************
 * 일정 화면
 * ******************************************************
 */
export default function SchedulePage() {
  const today = dayjs().format('YYYY-MM-DD');

  const params = useLocation();

  const paramsDate = params.search.split('=')[1];

  const [tabValue, setTabValue] = useState(0);

  const [date, setDate] = useState(paramsDate || today);

  const onDataChange = (newDate: string) => {
    setDate(newDate);
  };

  return (
    <Box>
      <DateCalendar
        isBadge
        workData={dummyMonthWorkoutList}
        value={paramsDate}
        onChange={(e) => onDataChange(dayjs(e).format('YYYY-MM-DD'))}
      />
      <Divider />

      <Box pt={3}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          scrollButtons={false}
          variant="fullWidth"
        >
          <Tab label="운동 기록" />
          <Tab label="예약 내역" />
        </Tabs>

        <Box px={2.5} py={3}>
          {tabValue === 0 && <WorkOutRecord date={date} />}
          {tabValue === 1 && <ReservationList date={date} />}
        </Box>
      </Box>
    </Box>
  );
}
