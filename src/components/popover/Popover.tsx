import { Box, Drawer } from "@mui/material";
import { PopoverProps } from "./types";

const Popover = ({
  direction = "left",
  children,
  open,
  onClose,
  padding
}: PopoverProps) => {
  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paperAnchorBottom": { borderRadius: "15px 15px 0px 0px" }
      }}
      anchor={direction}
      open={open}
      onClose={onClose}
      draggable={true}
    >
      <Box padding={padding}> {children}</Box>
    </Drawer>
  );
};

export default Popover;
