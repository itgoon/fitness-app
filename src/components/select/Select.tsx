import { default as MuiSelect } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// material-ui
import { Typography } from "@mui/material";
import _ from "lodash";
import { MuiSelectProps } from "./types";

// ----------------------------------------------------------------------

function Select({ list, ...props }: MuiSelectProps) {
  return (
    <MuiSelect
      {...props}
      className={`select-input ${props.className}`}
      // value={value === undefined ? list[0].label : value}
    >
      {!_.isEmpty(list) &&
        list?.map(({ label, ...props }, key) => (
          <MenuItem key={key} {...props}>
            <Typography>{label}</Typography>
          </MenuItem>
        ))}
    </MuiSelect>
  );
}

export default Select;
