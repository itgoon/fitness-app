import { TabsOwnProps } from "@mui/material";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export type TabList = {
  label: any;
  value: any;
};

export type TabsProps = TabsOwnProps & {
  list?: TabList[];
};
export interface CustomTabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
}
