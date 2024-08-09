import { Box, Checkbox as MuiCheckbox, Typography } from "@mui/material";
import { CustomCheckboxProps } from "./type";

const Checkbox = ({
  label,
  opacity = "0.6",
  checked,
  labelSx,
  ...props
}: CustomCheckboxProps) => {
  return (
    <Box>
      <MuiCheckbox {...props} checked={checked} />
      {label && <Typography variant={"c2"}>{label}</Typography>}
    </Box>
  );
};

export default Checkbox;
