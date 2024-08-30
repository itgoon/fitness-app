import { DialogProps } from '@mui/material/Dialog';

// ----------------------------------------------------------------------

export type ConfirmDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: VoidFunction;
  onClose: VoidFunction;
  contentStyle?: React.CSSProperties;
};

export type CustomDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  action?: React.ReactNode;
  onClose: VoidFunction;
  contentStyle?: React.CSSProperties;
};
