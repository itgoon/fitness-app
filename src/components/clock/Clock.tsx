import { memo, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";

const Clock = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center"
      }}
    >
      <Typography variant="b1" color="--light-color">
        {dayjs().format("YYYY년 M월 D일 (ddd)")}
      </Typography>
      <Typography variant="h3">{time.format("HH:mm:ss")}</Typography>
    </Box>
  );
};

export default memo(Clock);
