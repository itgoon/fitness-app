import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import Button from "../button";
import Typography from "../typography";
import Icon from "../icon";
import { Box } from "@mui/material";

export interface ModalPrograssProps {
  onClick?: () => void;
  timeType?: string;
  timeUnit: "초" | "분" | "시간";
}

const ModalPrograss = ({ onClick, timeType, timeUnit }: ModalPrograssProps) => {
  const [isTime, setIsTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTime((prevIsTime) => {
        if (prevIsTime > 1) {
          return prevIsTime - 1;
        }
        return (prevIsTime = isTime);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const resetTestprogress = () => {
    let progress = 0;
    try {
      if (isTime !== undefined) progress = Math.max(0, (isTime / 60) * 100);
    } catch (err) {
      progress = 0;
    }
    return progress;
  };

  const resetTestTimer = () => {
    let progress = 0;
    try {
      if (isTime !== undefined) {
        progress = isTime - (1 % 60);
      }
    } catch (err) {
      return (progress = 0);
    }

    return String(progress).padStart(2, "0");
  };

  return (
    <Box>
      <Box sx={{ padding: "15px" }}>
        <Button onClick={onClick}>
          <Icon name="QrCode2" />
        </Button>

        <LinearProgress
          sx={{
            backgroundColor: "var(--primary-bg-color) !important",
            height: "6px !important",
            borderRadius: "5px !important",
            " .MuiLinearProgress-bar": {
              backgroundColor: "var(--primary-color)",
              height: "6px !important",
              borderRadius: "5px !important"
            }
          }}
          variant="determinate"
          value={resetTestprogress()}
        />

        <Typography sx={{ marginTop: "5px" }}>
          {`${timeType} : ${resetTestTimer()} ${timeUnit}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ModalPrograss;
