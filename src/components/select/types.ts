import { SelectProps } from "@mui/material/Select";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export type SelectItemProps = {
  label: any;
  value: any;
};

export type MuiSelectProps = SelectProps & {
  list?: SelectItemProps[];
  children?: ReactNode;
  onChange?: (arg: any) => void;
  size?: "small" | undefined;
  className?: string;
};
