import * as Styled from "../styled";
import { Button as MuiButton, Typography } from "@mui/material";
import { ButtonProps } from "./type";

const Button = ({
  children,
  size = "medium",
  onClick,
  variant,
  textVariant,
  sx
}: ButtonProps) => {
  return (
    <MuiButton
      size={size}
      sx={sx ? { sx } : {}}
      variant={variant}
      onClick={onClick}
    >
      {typeof children === "string" ? (
        <Typography variant={textVariant}>{children}</Typography>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
