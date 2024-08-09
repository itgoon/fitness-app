import { CSSProperties, ReactNode } from "react";

// export type ButtonTypeProps = "social" | "rounded";
// export interface ButtonProps {
//   type?: "contained" | "text" | "round" | "icon" | "outlined";
//   children?: ReactNode;
//   width?: string;
//   size?: "large" | "medium" | "small"; //height : 40 / 36 / 28
//   color?: string;
//   style?: any;
//   onClick?: () => void;
//   id?: string;
//   variant?: string;
//   textColor?: string;
//   bg?: string;
//   buttonType?: string;
//   fullWidth?: boolean;
//   wrapStyle?: any;
//   disabled?: boolean;
//   justify?: string;
//   defaultColor?: string;
//   textVariant?: TypoVariantType;
// }

export type ButtonTypeProps = "social" | "rounded";
export interface ButtonProps {
  children?: ReactNode;
  width?: string;
  size?: "large" | "medium" | "small"; //height : 40 / 36 / 28
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  textVariant?: any;
  sx?: CSSProperties;
}
