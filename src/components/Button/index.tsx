import { Button as MuiButton } from "@mui/material";

import { CustomButton } from "./types";
import Icon from "../Icon";

export default function Button({
  startIcon,
  endIcon,
  borderColor,
  fullWidth = true,
  isShadow = false,
  ...props
}: CustomButton) {
  const shadowSx = isShadow === true ? "0 2px 4px rgba(0, 0, 0, 0.02)" : "";
  return (
    <MuiButton
      fullWidth={fullWidth}
      startIcon={startIcon && <Icon name={startIcon} />}
      endIcon={endIcon && <Icon name={endIcon} />}
      sx={{
        border: `1px solid ${borderColor}`,
        boxShadow: `${shadowSx} !important`,
        ...props.sx
      }}
      {...props}
    />
  );
}
