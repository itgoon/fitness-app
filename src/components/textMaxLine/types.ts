import { LinkProps } from "@mui/material/Link";
import { TypographyProps } from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

type IProps = TypographyProps & LinkProps;

export interface TextMaxLineProps extends IProps {
  line?: number;
  asLink?: boolean;
  persistent?: boolean;
  children: ReactNode;
  variant?: Variant;
}
