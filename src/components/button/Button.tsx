import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./type";

const Button = (props: ButtonProps) => {
  return <MuiButton {...props} />;
};

export default Button;
