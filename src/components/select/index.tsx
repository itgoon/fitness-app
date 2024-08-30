import {
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ListProps = {
  label: string;
  value: any;
};
export type SelectProps = MuiSelectProps & {
  list: ListProps[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  value?: any;
  isAll?: boolean;
};

export default function Select({
  list = [],
  onChange,
  disabled,
  value,
  isAll = true,
  sx,
  ...props
}: SelectProps) {
  const theme = useTheme();
  console.log({ value });
  return (
    <>
      <MuiSelect
        {...props}
        // id={props.name}
        name={String(props?.name)}
        error={!!props?.error}
        size={"medium"}
        // helperText={props?.error ? props.error?.message : props?.helperText}
        sx={{ textTransform: "capitalize", ...sx }}
        value={value ? value : ""}
        displayEmpty
        renderValue={(v) => (
          <span
            style={{
              color: value
                ? theme.palette.text.primary
                : theme.palette.text.disabled,
            }}
          >
            {v?.length ? v : `${isAll ? "전체" : "선택"}`}
          </span>
        )}
        // inputProps={{
        //   id: `select_${props.name}`,
        //   "aria-label": `select_${props.name}`,
        // }}
        onChange={(e) => (onChange ? onChange(e?.target?.value) : {})}
      >
        {isAll && (
          <MenuItem key="none" value="">
            <em>전체</em>
          </MenuItem>
        )}
        {list?.map((option) => (
          <MenuItem key={`key_${option?.value}`} value={option?.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </>
  );
}
