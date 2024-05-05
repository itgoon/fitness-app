/* eslint-disable no-empty */
import * as MuiIcon from "@mui/icons-material";
import * as React from "react";
import { StyleIcon } from "../styled";

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
export const MuiIconNames = [
  "Home",
  "QrCode2",
  "Groups",
  "CalendarMonth",
  "Settings",
  "Search",
  "KeyboardArrowRight",
  "Notifications"
] as const;
export type MuiIconNameType = (typeof MuiIconNames)[number];

export interface IconProps {
  type?: "img" | "mui"; //가져온 이미지 / mui 이미지
  muiName?: MuiIconNameType;
  name?: IconNameType;
  color?: string;

  isLabel?: boolean;
  unit?: IconUnit;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  muiName,
  unit = "svg",
  style,
  size,
  onClick,
  type = "mui",
  color
}) => {
  if (type === "mui") {
    if (!muiName) return <></>;
    const Icon = MuiIcon[muiName];

    return (
      <Icon
        onClick={onClick}
        style={{
          color: color && `var(${color})`,
          width: size ? size : "24px",
          height: size ? size : "24px",
          ...style
        }}
      />
    );
  } else {
    return (
      <StyleIcon
        color={color}
        src={"/images/icons/" + name + "." + unit}
        alt={name}
        size={size}
        onClick={onClick}
        style={style}
      />
    );
  }
};

export default Icon;
