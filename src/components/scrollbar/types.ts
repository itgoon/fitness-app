import { Props } from "simplebar-react";

import { Theme, SxProps } from "@mui/material/styles";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export interface ScrollbarProps extends Props {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}
