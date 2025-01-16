import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router';
import dayjs from 'dayjs';
import { DateReqFormat } from 'src/utils/formatTime';
import DateCalendar from 'src/components/dateCalendar';
import Divider from '../../../components/custom/Divider';
import WorkoutTab from './WorkoutTab';
import ReservationTab from './ReservationTab';
import CalendarCaption from './Calendar/CalendarCaption';
import CalendarHeader from './Calendar/CalendarHeader';

/**
 * ******************************************************
 * 일정 화면
 * ******************************************************
 */
export default function SchedulePage() {
  const location = useLocation();

  const today = dayjs().format(DateReqFormat);

  const [tabValue, setTabValue] = useState(0);

  const [date, setDate] = useState(
    location.state ? location.state.date : today
  );

  const onDataChange = (newDate: string) => {
    setDate(newDate);
  };

  return (
    <>
      {/* 달력 */}
      <DateCalendar
        value={dayjs(date)}
        onChange={(e) => onDataChange(dayjs(e).format(DateReqFormat))}
        slots={{
          calendarHeader: (e) => (
            <>
              <CalendarHeader />
              <CalendarCaption />
            </>
          )
        }}
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
          {tabValue === 0 && <WorkoutTab date={date} />}
          {tabValue === 1 && <ReservationTab date={date} />}
        </Box>
      </Box>
    </>
  );
}
