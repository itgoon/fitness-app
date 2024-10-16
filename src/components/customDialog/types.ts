import { DialogProps } from "@mui/material/Dialog";
import React from "react";

// ----------------------------------------------------------------------

export type ConfirmDialogProps = Omit<DialogProps, "title" | "content"> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: () => void;
  onClose: () => void;
  contentStyle?: React.CSSProperties;
};

export type CustomDialogProps = Omit<DialogProps, "title" | "content"> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  action?: React.ReactNode;
  onClose: () => void;
  contentStyle?: React.CSSProperties;
};
