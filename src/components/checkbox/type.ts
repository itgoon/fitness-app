import { CheckboxProps } from "@mui/material";

export interface CustomCheckboxProps extends CheckboxProps {
  label?: string;
  opacity?: string;
  checked: boolean;
  labelSx: any;
  labelStyle?: any;
}
