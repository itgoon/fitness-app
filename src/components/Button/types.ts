import { ButtonProps } from "@mui/material";
import { CSSProperties } from "react";
import { IconsType } from "../Icon/types";

export type ButtonDataProps = {
  child: string;
  variant?: ButtonProps["variant"];
  startIcon?: IconsType;
  endIcon?: IconsType;
  sx?: CSSProperties;
  color?: any;
  borderColor?: any;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
};

export type CustomButton = ButtonProps & {
  startIcon?: IconsType | null;
  endIcon?: IconsType | null;
  borderColor?: any;
  isShadow?: boolean;
};
