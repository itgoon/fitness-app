import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import Typography from "../typography";
import { useState } from "react";
import { TimeFormat } from "@/utils/formatUtil";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import Popover from "../popover";
import Button from "../button";
import { TimepickerProps } from "./types";
import { Box } from "@mui/material";

const Timepicker = ({
  value,
  format = TimeFormat,
  onChange = () => {},
  children,
  title,
  width,
  disabled,
  placeholder,
  isRef
}: TimepickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeValue, setChangeValue] = useState<Dayjs | undefined>(
    value ? dayjs(value, format) : undefined
  );

  const handleChange = (e: Dayjs) => {
    setChangeValue(e);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Button
        variant="text"
        onClick={() => (disabled ? {} : setIsOpen(!isOpen))}
        ref={isRef}
      >
        {children ? (
          children
        ) : (
          <>
            <Box
              sx={{
                display: "felx",
                height: "40px",
                border: "1px solid var(--border-color)",
                bg: disabled ? "--disabeld-color" : "--white-color",
                padding: "12px",
                items: "center",
                radius: "4px",
                position: "relative",
                justify: title ? "space-between" : "center"
              }}
            >
              {title && (
                <Typography variant="b2" color="--light-color">
                  {title}
                </Typography>
              )}
              {value ? (
                <Typography variant="b2">{value}</Typography>
              ) : (
                <Typography variant="b2" color="--light-color">
                  {placeholder ? placeholder : ""}
                </Typography>
              )}
            </Box>
          </>
        )}
      </Button>

      <Popover
        open={isOpen}
        onClose={() => {
          if (changeValue) onChange(changeValue.format(format));
          setIsOpen(false);
        }}
        direction="bottom"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px, 16px"
              }}
            >
              <Button
                onClick={() => {
                  if (changeValue) onChange(changeValue.format(format));
                  setIsOpen(false);
                }}
              >
                <Typography color="--primary-color" variant="h6">
                  완료
                </Typography>
              </Button>
            </Box>
            <MultiSectionDigitalClock
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                li: { width: "100%", justifyContent: "center" }
              }}
              value={changeValue}
              onChange={(e: Dayjs) => handleChange(e)}
            />
          </Box>
        </LocalizationProvider>
      </Popover>
    </Box>
  );
};

export default Timepicker;
