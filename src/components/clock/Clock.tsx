import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Flex } from "../styled";
import dayjs from "dayjs";
import Typography from "../typography";

const Clock = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Flex direction="column" gap={8} items="center">
      <Typography variant="b1" color="--light-color">
        {dayjs().format("YYYY년 M월 D일 (ddd)")}
      </Typography>
      <Typography variant="h3">{time.format("HH:mm:ss")}</Typography>
    </Flex>
  );
};

export default memo(Clock);
