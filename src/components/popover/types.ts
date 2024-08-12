import { ReactNode } from "react";

export interface PopoverProps {
  open: boolean;
  onClose: (e: boolean) => void;
  direction?: "right" | "left" | "bottom";
  children?: ReactNode;
  padding?: string;
}
