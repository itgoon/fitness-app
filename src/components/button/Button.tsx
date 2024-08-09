import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./type";

const Button = ({ children }: ButtonProps) => {
  return <MuiButton>{children}</MuiButton>;
};

export default Button;
