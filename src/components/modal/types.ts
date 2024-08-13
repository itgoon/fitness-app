import { DialogProps } from "@mui/material/Dialog";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export type ModalProps = DialogProps & {
  onClose: VoidFunction;
  onClick?: VoidFunction;
  clickMsg?: any;
  closeMsg?: any;
  btnIcon?: ReactNode;
  titIcon?: ReactNode;
};
