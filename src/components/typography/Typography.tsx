import { PaletteColor } from "@mui/material/styles";
import { ReactNode } from "react";
import * as Styled from "../styled";

export type TypoVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "c1"
  | "c2"
  | "ht";

export interface TypographyProps {
  variant?: TypoVariantType;
  children: ReactNode;
  color?: string | PaletteColor;
  weight?: string;
  size?: string;
  wrap?: string;
  style?: any;
  className?: string;
  opacity?: string;
  align?: "center" | "start" | "end";
  inline?: boolean;
}

const Typography = ({
  variant = "ht",
  children = "",
  color,
  weight,
  size,
  wrap,
  style,
  opacity,
  className,
  align,
  inline = false
}: TypographyProps) => {
  return (
    <Styled.Typography
      inline={inline}
      className={className}
      variant={variant}
      // color={color}
      weight={weight}
      size={size}
      wrap={wrap}
      style={style}
      opacity={opacity}
      align={align}
    >
      {children}
    </Styled.Typography>
  );
};

export default Typography;
