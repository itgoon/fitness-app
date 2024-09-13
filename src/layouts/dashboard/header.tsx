import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";

import { useResponsive } from "src/hooks/useResponsive";

import { bgBlur } from "src/theme/css";

import Logo from "src/components/logo";
import { useSettingsContext } from "src/components/settings";

import AccountPopover from "../common/accountPopover";
import SettingsButton from "../common/settingsButton";
import { HEADER, NAV } from "../configLayout";

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === "horizontal";

  const isNavMini = settings.themeLayout === "mini";

  const lgUp = useResponsive("up", "lg");

  const offsetTop = isNavHorizontal;

  const renderContent = (
    <>
      {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}
      {/* 
      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )} */}

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        {/* <LanguagePopover /> */}
        <SettingsButton />
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: "background.default",
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI + 1}px)`
          })
        })
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 }
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}