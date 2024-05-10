import { DateReqFormat } from "@/utils/formatUtil";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "moment/locale/ko";
import {
  CalendarMonthWrapper,
  CalendarWeekWrapper,
  Div,
  EmptyButton,
  Flex
} from "../styled";
import Datepicker from "../datepicker";
import Typography from "../typography";

import { useEffect, useRef, useState } from "react";
import { ScheduleList } from "@/utils/constants";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
export interface CalendarProps {
  type?: "week" | "month";
  value?: string;
  format?: string;
  onChange?: (e: string) => void;
  style?: any;
  min?: string;
  max?: string;
}
moment.locale("ko-KR");

const localizer = momentLocalizer(moment);

const Calendar = ({
  type = "month",
  value,
  format = DateReqFormat,
  onChange,
  style,
  min,
  max
}: CalendarProps) => {
  const DragAndDropCalendar = withDragAndDrop(BigCalendar);
  const [list, setList] = useState([
    {
      id: 0,
      title: "All Day Event very long title",
      start: new Date("2024-05-08 14:30"),
      end: new Date("2024-05-08 16:00")
    }
  ]);

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

      <DragAndDropCalendar
        localizer={localizer}
        events={list}
        date={new Date("2024-05-09")}
        view="week"
        toolbar={false}
        onEventDrop={(e) => {
          console.log("onEventDrop", { e });
        }}
        allDayAccessor={() => false}
        onEventResize={(e) => {
          console.log("onEventResize", { e });
        }}
        // draggableAccessor="isDraggable"
        onSelectSlot={(e) => {
          console.log("onSelectSlot", { e });
        }}
        onSelectEvent={(e) => {
          console.log("onSelectEvent", { e });
        }}
        resizable
        selectable
        style={{ height: "100%" }}

        // components={{ toolbar: Toolbar }}
      />
    </CalendarWeekWrapper>
  );
};

export default Calendar;
