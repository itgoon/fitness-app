import { ReactQuillProps } from "react-quill";

import { Theme, SxProps } from "@mui/material/styles";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export interface EditorProps extends ReactQuillProps {
  error?: boolean;
  simple?: boolean;
  helperText?: ReactNode;
  sx?: SxProps<Theme>;
}
