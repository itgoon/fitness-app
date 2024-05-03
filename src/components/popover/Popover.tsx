import { Drawer } from "@mui/material";
import { ReactNode } from "react";
import * as Styled from "../styled";

export interface PopoverProps {
  open: boolean;
  onClose: (e: boolean) => void;
  direction?: "right" | "left" | "bottom";
  children?: ReactNode;
  padding?: string;
}

const Popover = ({
  direction = "left",
  children,
  open,
  onClose,
  padding
}: PopoverProps) => {
  return (
    <Styled.Popover
      anchor={direction}
      open={open}
      onClose={onClose}
      draggable={true}
    >
      <Styled.Div padding={padding}> {children}</Styled.Div>
    </Styled.Popover>
  );
};

export default Popover;
