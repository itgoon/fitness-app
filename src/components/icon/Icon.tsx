/* eslint-disable no-empty */

import * as MuiIcon from "@mui/icons-material";
import * as React from "react";
import { StyleIcon } from "../styled";

import Box, { BoxProps } from "@mui/material/Box";
import { IconifyIcon } from "@iconify/react";
import { forwardRef } from "react";
import { Icon as IconiIcon } from "@iconify/react";

//-----------------------------------------------------

export type IconifyProps = IconifyIcon | string;

export type IconUnit = "svg" | "png";
export const IconNames = [
  "app-logo",
  "social-google-logo",
  "social-naver-logo",
  "social-apple-logo",
  "main-btn-1",
  "main-btn-2",
  "main-btn-3",
  "main-btn-4",
  "nodata"
] as const;
export type IconNameType = (typeof IconNames)[number];
export const IconifyNames = [] as const;
export type IconifyNameType = (typeof IconifyNames)[number];

export interface IconProps extends BoxProps {
  type?: "img" | "iconify"; //가져온 이미지 / mui 이미지
  // name?: IconifyNameType;
  name?: IconifyProps;
  color?: string;

  isLabel?: boolean;
  unit?: IconUnit;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  onClick?: () => void;
  sx?: any;
}

const Icon = forwardRef<SVGElement, IconProps>(
  (
    {
      name,
      // name,
      unit = "svg",
      style,
      size = 20,
      onClick,
      type = "iconify",
      color,
      sx,
      ...other
    },
    ref
  ) => {
    if (type === "iconify") {
      return (
        <Box
          ref={ref}
          component={IconiIcon}
          className="component-iconify"
          icon={name}
          onClick={onClick}
          sx={{
            width: size,
            height: size,
            color: color ? `var(${color})` : "var(--dark-color)",
            cursor: onClick ? "pointer" : "default",
            ...sx
          }}
          style={style}
          {...other}
        />
      );
    }

    return (
      <StyleIcon
        color={color}
        src={"/images/icons/" + name + "." + unit}
        alt={name + ""}
        size={size}
        onClick={onClick}
        style={style}
      />
    );
  }
);

export default Icon;
