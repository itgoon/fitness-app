import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import Typography from "../typography";
import { ReactNode, useMemo, useState } from "react";
import Icon from "../icon";
import { DateFormat } from "@/utils/formatUtil";
import { Box, Button } from "@mui/material";
import { DatePickerProps } from "./types";

dayjs.locale("ko");

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
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {children ? (
          children
        ) : (
          <Button ref={isRef}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: 40,
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--white-color)",
                padding: "12px",
                alignItems: "center",
                radius: 4,
                position: "relative"
              }}
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

              <Icon name="CalendarMonth" size={20} color="--light-color" />
            </Box>
          </Button>
        )}
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "30px 16px 16px 16px"
        }}
      >
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
            <Datepicker
              onChange={(e) => {
                onChange(dayjs(e).format(format));
                setIsOpen(false);
              }}
              maxDate={maxDate ? maxDate : undefined}
            />
          ) : (
            <Datepicker
              value={dayjs(value, format)}
              onChange={(e) => {
                onChange(dayjs(e).format(format));
                setIsOpen(false);
              }}
              maxDate={maxDate ? maxDate : undefined}
            />
          )}
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Datepicker;
