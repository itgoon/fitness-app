import { DateReqFormat } from "@/utils/formatUtil";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "moment/locale/ko";
import { CalendarMonthWrapper } from "../styled";
export interface CalendarProps {
  type?: "week" | "month";
  value?: string;
  format?: string;
  onChange?: (e: string) => void;
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
};

export default Calendar;
