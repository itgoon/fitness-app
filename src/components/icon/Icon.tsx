import * as MUIICON from "@mui/icons-material";
// import * as SVGICON from 'assets/svgs';
import { IconProps } from "./types";
import { useMemo } from "react";

// type AntDesignIconsType = keyof typeof ANTDICON;
// type SVGIconsType = keyof typeof SVGICON;
type MUIIconsType = keyof typeof MUIICON;

export type IconsType = MUIIconsType;

// ----------------------------------------------------------------------

export default function Icon({ name, size = 24, color, onClick }: IconProps) {
  // const LibraryIcon = (ANTDICON as any)[name] || (MUIICON as any)[name];
  // const Component = LibraryIcon || (SVGICON as any)[name];
  const LibraryIcon = (MUIICON as any)[name];

  const styleProps = useMemo(
    () =>
      LibraryIcon
        ? {
            style: {
              fontSize: `${size}px`,
              color,
              cursor: onClick !== undefined ? "pointer" : "auto"
            }
          }
        : {
            width: size,
            height: size,
            color: color,
            style: { cursor: onClick !== undefined ? "pointer" : "auto" }
          },
    [size, color, onClick]
  );

  return LibraryIcon ? <LibraryIcon {...styleProps} onClick={onClick} /> : null;
}
