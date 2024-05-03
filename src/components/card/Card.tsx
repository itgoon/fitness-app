import * as Styled from "../styled";
import { ReactNode } from "react";
import { Card as MuiCard } from "@mui/material";

export interface CardProps {
  children?: string | ReactNode;
  onClick?: (e: any) => void;
  height?: string;
  width?: string;
  size?: "sm" | "md" | "lg";
  radius?: string;
}
/**
 * size
 *  height - 72 | 88 | 120
 *  radius - 8  |  8 | 4
 */
export interface CardWrapProps {
  padding?: string;
  gap?: number;
  direction?: "column" | "row";
  children?: ReactNode;
  style?: any;
  className?: string;
}
export const CardWrap = ({
  padding = "var(--layout-padding)",
  gap = 12,
  direction = "column",
  children,
  style,
  className
}: CardWrapProps) => {
  return (
    <Styled.Flex
      width="100%"
      height="100%"
      direction={direction}
      gap={gap}
      wrap="wrap"
      className={`${className ? className : ""} card_wrap_comp`}
      padding={padding}
      style={style}
    >
      {children}
    </Styled.Flex>
  );
};

const Card = ({
  children,
  onClick,
  height,
  width = "100%",
  size = "md",
  radius
}: CardProps) => {
  // return <MuiCard raised={true}>{children} </MuiCard>;
  return (
    <Styled.CardWrapper
      className="card_comp"
      // raised={true}
      radius={radius}
      onClick={onClick ? onClick : () => {}}
      size={size}
      height={height ? height : ""}
      width={width ? width : "100%"}
    >
      <div>{children}</div>
    </Styled.CardWrapper>
  );
};

export default Card;
