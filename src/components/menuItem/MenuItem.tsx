import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatepicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import * as Styled from "../styled";
import Typography from "../typography";
import { ReactNode, useEffect, useState } from "react";
import Input from "../input";
import { Div } from "../styled";
import Icon from "../icon";
import Menu from "@mui/material/Menu";
import { MenuItem as MuiMenuItem } from "@mui/material";
import { DateFormat } from "@/utils/formatUtil";

export interface MenuItemProps {
  children?: ReactNode;
  list?: { label?: string; value: any }[];
  onClick?: (e: any) => void;
  isOpen?: (e: boolean) => void;
}

const MenuItem = ({ children, list, onClick, isOpen }: MenuItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isOpen) isOpen(true);

    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value: any) => {
    if (onClick) onClick(value);
    if (isOpen) isOpen(false);
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Styled.EmptyButton style={{ width: "auto" }} onClick={handleClick}>
        {children ? (
          children
        ) : (
          <Icon muiName="MoreVert" size={14} color="--light-color" />
        )}
      </Styled.EmptyButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        // onClose={() => (isOpen ? isOpen(false) : {})}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: { padding: "0px" }
        }}
      >
        {list?.map((item) => (
          <MuiMenuItem onClick={() => handleClose(item.value)}>
            <Typography variant="b2"> {item.label}</Typography>
          </MuiMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuItem;
