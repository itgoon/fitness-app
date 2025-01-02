import { Box, InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/system";
import { ChangeEventHandler } from "react";
import Iconify from "../iconify";

interface SearchInputProps {
  value: string;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  placeholder: string;
  onSubmit?: any;
}

export default function SearchInput({ onSubmit, ...props }: SearchInputProps) {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative", width: "fit-content", height: "48px" }}>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 54,
          height: "100%",
          backgroundColor: theme.palette.grey[300],
          borderRadius: "0 8px 8px 0",
          cursor: "pointer",
        }}
      >
        <Iconify icon="eva:search-fill" />
      </Box>
      <TextField
        {...props}
        sx={{
          width: 300 + 54,
          height: "100%",
          [`& .MuiInputBase-root`]: {
            pr: 0,
            height: "100%",
          },
          [`& .MuiInputAdornment-root`]: {
            flexShrink: 0,
            ml: 0,
          },
        }}
        inputProps={{
          sx: { height: "inherit", py: 0 },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ width: 54, height: 48, cursor: "pointer" }}
              onClick={onSubmit}
            />
          ),
        }}
      />
    </Box>
  );
}
