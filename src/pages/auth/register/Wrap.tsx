import { Stack } from "@mui/material";
import { ReactNode } from "react";
import { useResponsive } from "src/hooks/useResponsive";

interface Iwrap {
  children: ReactNode;
}
export default function Wrap({ children }: Iwrap) {
  const mdUp = useResponsive("up", 420);
  const resPaddinng = mdUp ? 5 : 2;
  return (
    <Stack
      sx={{
        flexDirection: "column",
        justifyContent: "space-between"
      }}
      spacing={4}
      paddingLeft={resPaddinng}
      paddingRight={resPaddinng}
    >
      {children}
    </Stack>
  );
}
