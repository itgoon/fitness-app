import { DateReqFormat } from "@/utils/formatUtil";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/ko";
import { FixCalendarMonthWrapper} from "../styled";
import Icon from '../icon'
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { Badge, } from "@material-ui/core";
import 'dayjs/locale/ko';
import { useEffect, useRef } from "react";

export interface CalendarProps { 
  value?: string;
  format?: string;
  onChange?: (newValue: string) => void;
  style?: any;
  min?: string;
  max?: string;
}

const Calendar = ({
  value,
  format = DateReqFormat,
  onChange,
  style,
  min,
  max
}: CalendarProps) => {
  const eventList = [
    { date: "2024-05-01", type: "PT" },
    { date: "2024-05-04", type: "IN" },
    { date: "2024-05-11", type: "IN" },
    { date: "2024-05-14", type: "PT" },
    { date: "2024-05-16", type: "PT" },
    { date: "2024-05-17", type: "PT" },
  ];

  const eventDay = (props: PickersDayProps<Dayjs>) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const ev = eventList?.find(
      (item) => item.date === props.day.format(format)
    );

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={
          ev ? (
            <Icon
              name="material-symbols:circle"
              size={7}
              color={ev.type === "PT" ? "--red-color" : "--blue-color"}
            />
          ) : undefined
        }
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  };
  return (
    <FixCalendarMonthWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko" dateFormats={{monthAndYear : 'YYYY년 M월'}}>
        <DateCalendar
          value={value ? dayjs(value, format) : dayjs()}
          onChange={(newValue) =>
            onChange ? onChange(newValue.format(format)) : {}
          }
          sx={style}
          minDate={min ? dayjs(min, format) : undefined}
          maxDate={max ? dayjs(max, format) : undefined}
          
          slots={{
            day: eventDay
          }}
          slotProps={{
            day: {eventList} as any,
          }}
        />
      </LocalizationProvider>
    </FixCalendarMonthWrapper>
  );
};

export default Calendar;
