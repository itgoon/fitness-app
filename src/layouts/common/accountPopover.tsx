import { m } from "framer-motion";

import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { alpha } from "@mui/material/styles";

import { useRouter } from "src/routes/hooks";

import { logout } from "src/service/authService";

import { useRecoilState } from "recoil";
import { varHover } from "src/components/animate";
import CustomPopover, { usePopover } from "src/components/customPopover";
import Store from "src/store";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();
  const popover = usePopover();
  const [auth, setAuth] = useRecoilState(Store.Auth.authState);
  const handleLogout = () => {
    logout();
    setAuth(undefined);
  };
  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
          })
        }}
      />

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 200, p: 0 }}
      >
        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: "fontWeightBold", color: "error.main" }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
