import Typography from "../typography";
import { ReactNode, useState } from "react";
import Icon from "../icon";
import Menu from "@mui/material/Menu";
import { MenuItem as MuiMenuItem } from "@mui/material";
import Button from "../button";

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
      <Button variant="text" sx={{ width: "auto" }} onClick={handleClick}>
        {children ? (
          children
        ) : (
          <Icon name="MoreVert" size={14} color="--light-color" />
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
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
