import { Controller, useFormContext } from "react-hook-form";

import TextField, { TextFieldProps } from "@mui/material/TextField";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  onEventChange?: (fieldName: string, value: string) => void;
  isView?: boolean;
};

export default function RHFTextField({
  name,
  helperText,
  onEventChange,
  type,
  variant,
  className,
  isView,
  disabled,
  size,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          className={`${isView ? `isView` : ""} ${className}`}
          variant={variant}
          type={type}
          size={size}
          value={type === "number" && field.value === 0 ? "" : field.value}
          onChange={(e) => {
            if (type === "number") {
              field.onChange(Number(e.target.value));
            } else {
              field.onChange(e.target.value);
            }
            if (onEventChange) {
              onEventChange(name, e.target.value);
            }
          }}
          disabled={isView ? true : disabled}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
}
