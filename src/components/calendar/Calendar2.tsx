import { DateReqFormat } from "@/utils/formatUtil";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import {
  CalendarMonthWrapper,
  CalendarWeekWrapper,
  Div,
  EmptyButton,
  Flex
} from "../styled";
import Datepicker from "../datepicker";
import Typography from "../typography";

// import { default as WeekCalendar } from "react-horizontal-datepicker";
import { useEffect, useRef, useState } from "react";
import { ScheduleList } from "@/utils/constants";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel
} from "@devexpress/dx-react-scheduler-material-ui";

export interface CalendarProps {
  type?: "week" | "month";
  value?: string;
  format?: string;
  onChange?: (e: string) => void;
  style?: any;
  min?: string;
  max?: string;
}

type WeekProps = { week: string; day: string };

const recurrenceAppointments2 = [
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2024, 5, 6, 10, 0),
    endDate: new Date(2024, 5, 6, 11, 0),
    id: 3,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2024, 5, 7, 11, 45),
    endDate: new Date(2024, 5, 7, 13, 20),
    id: 4,
    location: "Room 2"
  },
  {
    title: "New Brochures",
    startDate: new Date(2024, 5, 6, 14, 40),
    endDate: new Date(2024, 5, 6, 15, 45),
    id: 5,
    location: "Room 2"
  },
  {
    title: "Install New Database",
    startDate: new Date(2024, 5, 8, 9, 45),
    endDate: new Date(2024, 5, 8, 11, 15),
    id: 6,
    location: "Room 1"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2024, 5, 9, 11, 45),
    endDate: new Date(2024, 5, 9, 13, 5),
    id: 7,
    location: "Room 3"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2024, 5, 9, 10, 0),
    endDate: new Date(2024, 5, 9, 11, 30),
    id: 12,
    location: "Room 2"
  }
];

const recurrenceAppointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 15),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 100,
    style: { background: "#FAA" }
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 101,
    allDay: true
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 102
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 27, 11, 45),
    endDate: new Date(2018, 5, 27, 13, 20),
    id: 4,
    location: "Room 2"
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 5, 26, 14, 40),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2"
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 5, 28, 9, 45),
    endDate: new Date(2018, 5, 28, 11, 15),
    id: 6,
    location: "Room 1"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 5, 29, 11, 45),
    endDate: new Date(2018, 5, 29, 13, 5),
    id: 7,
    location: "Room 3"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: "Room 2"
  }
];

const headerFormat = "YYYY년 M월";
const Calendar = ({
  type = "month",
  value,
  format = DateReqFormat,
  onChange,
  style,
  min,
  max
}: CalendarProps) => {
  const [state, setState] = useState({
    // data: recurrenceAppointments2,
    // currentDate: new Date("2024-05-08")
    data: recurrenceAppointments,
    currentDate: new Date("2018-06-24")
  });

  if (type === "month") {
    return (
      <CalendarMonthWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={value ? dayjs(value).format(format) : dayjs()}
            onChange={(newValue) =>
              onChange
                ? onChange(newValue.format(format))
                : console.log(newValue.format(format))
            }
            sx={style}
            minDate={min ? dayjs(min, format) : undefined}
            maxDate={max ? dayjs(max, format) : undefined}
          />
        </LocalizationProvider>
      </CalendarMonthWrapper>
    );
  }
  const appointmentComponent = (props: any) => {
    return (
      <Appointments.Appointment
        {...props}
        style={{ ...props.style, cursor: "not-allowed" }}
      />
    );
  };

  return (
    <CalendarWeekWrapper>
      <Datepicker>
        <Flex justify="space-between">
          <Typography variant="h6">
            {/* {weekList?.length > 0
              ? dayjs(weekList[0].day, format).format(headerFormat)
              : ""} */}
          </Typography>
        </Flex>
      </Datepicker>

      <>
        <Scheduler data={state.data} height={660}>
          <ViewState
            defaultCurrentDate={state.currentDate}
            defaultCurrentViewName="Week"
          />
          <EditingState
            onCommitChanges={() => {
              console.log("ere");
            }}
          />
          <EditRecurrenceMenu />
          <WeekView startDayHour={7} endDayHour={24} />

          <Appointments appointmentComponent={appointmentComponent} />

          <DragDropProvider />
        </Scheduler>
      </>
    </CalendarWeekWrapper>
  );
};

export default Calendar;
