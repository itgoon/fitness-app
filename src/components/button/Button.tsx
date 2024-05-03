import * as Styled from "../styled";
import {
  ButtonProps as ButtonCompProps,
  Button as MuiButton
} from "@mui/material";
import { ReactNode } from "react";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";

export type ButtonTypeProps = "social" | "rounded";
export interface ButtonProps {
  type?: "contained" | "text" | "round" | "icon" | "outlined";
  children?: ReactNode;
  width?: string;
  size?: "lg" | "md" | "sm"; //height : 40 / 36 / 28
  color?: string;
  style?: any;
  onClick?: () => void;
  id?: string;
  variant?: string;
  textColor?: string;
  bg?: string;
  buttonType?: string;
  fullWidth?: boolean;
  wrapStyle?: any;
  disabled?: boolean;
  justify?: string;
  defaultColor?: string;
  textVariant?: TypoVariantType;
}

const Button = ({
  children,
  type = "contained",
  size = "md",
  style,
  color, // = "--primary-color",
  onClick,
  disabled,
  width,
  textVariant
}: ButtonProps) => {
  return (
    <Styled.Button
      width={width ? width : "auto"}
      variant={type !== "contained" ? type : "contained"}
      type={type}
      size={size}
      defaultColor={color ? color : "--primary-color"}
      fullWidth
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {typeof children === "string" ? (
        <Typography
          variant={textVariant ? textVariant : size === "sm" ? "c2" : "b2"}
          color={
            type === "text"
              ? color
                ? color
                : "--primary-color"
              : "--white-color"
          }
        >
          {children}
        </Typography>
      ) : (
        children
      )}
    </Styled.Button>
  );
};

export default Button;
