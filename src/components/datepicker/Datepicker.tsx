import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatepicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import * as Styled from "../styled";
import Typography from "../typography";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Input from "../input";
import { Div } from "../styled";
import Icon from "../icon";
import { DateFormat } from "@/utils/formatUtil";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Popover from "../popover";
import { PickersCalendarHeader } from "@mui/x-date-pickers/PickersCalendarHeader";

dayjs.locale("ko");

export interface DatePickerProps {
  value?: string; // YYYY-MM-DD
  format?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  placeholder?: string;
  maxDate?: Dayjs;
  isRef?: any;
  title?: string;
  subTitle?: string;
}

const Datepicker = ({
  value,
  format = DateFormat,
  onChange = () => {},
  children,
  placeholder = "날짜 입력",
  maxDate,
  isRef,
  title,
  subTitle
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const settingHeight = useMemo((): number => {
    if (!isOpen) return 0;

    const _height = document.getElementsByClassName(
      "MuiDayCalendar-monthContainer"
    )[0]?.clientHeight;

    return _height ? _height : 240;
  }, [value, isOpen, document]);

  return (
    <Styled.Div>
      <Styled.EmptyButton onClick={() => setIsOpen(!isOpen)}>
        {children ? (
          children
        ) : (
          <Styled.EmptyButton ref={isRef}>
            <Styled.Flex
              height={"40px"}
              border="1px solid var(--border-color)"
              bg="--white-color"
              padding="12px"
              items="center"
              radius="4px"
              position="relative"
              justify="space-between"
            >
              <Typography
                variant="b2"
                color={
                  value && value !== "0000-00-00"
                    ? "--dark-color"
                    : "--light-color"
                }
              >
                {value && value !== "0000-00-00"
                  ? dayjs(value, format).format(DateFormat)
                  : placeholder
                    ? placeholder
                    : ""}
              </Typography>

              <Icon muiName="CalendarMonth" size={20} color="--light-color" />
            </Styled.Flex>
          </Styled.EmptyButton>
        )}
      </Styled.EmptyButton>
      <Popover
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="bottom"
      >
        <Styled.Flex direction="column" gap={8} padding={"30px 16px 16px 16px"}>
          {title && <Typography variant="h4">{title}</Typography>}
          {subTitle && (
            <Typography variant="b2" color="--light-color">
              {subTitle}
            </Typography>
          )}
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={{ monthAndYear: "YYYY년 MM월" }}
          >
            {value === "" ? (
              <Styled.Datepicker
                onChange={(e) => {
                  onChange(dayjs(e).format(format));
                  setIsOpen(false);
                }}
                maxDate={maxDate ? maxDate : undefined}
              />
            ) : (
              <Styled.Datepicker
                value={dayjs(value, format)}
                onChange={(e) => {
                  onChange(dayjs(e).format(format));
                  setIsOpen(false);
                }}
                maxDate={maxDate ? maxDate : undefined}
              />
            )}
          </LocalizationProvider>
        </Styled.Flex>
      </Popover>
    </Styled.Div>
  );
};

export default Datepicker;
