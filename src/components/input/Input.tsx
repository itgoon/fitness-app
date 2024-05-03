import { ReactNode, useRef } from "react";
import * as Styled from "../styled";
import {
  TextField,
  TextFieldProps,
  TextFieldVariants,
  InputProps as MuiInputProps,
  OutlinedInput
} from "@mui/material";
import Typography from "../typography";
import { InputAdornment } from "@material-ui/core";

export interface InputProps {
  size?: "sm" | "md" | "lg"; //height : 48, 40, 24
  onChange?: (e: any) => void;
  value?: string;
  placeholder?: string;
  type?: TextFieldProps["type"];
  sub?: string | ReactNode;
  style?: any;
  disabled?: boolean;

  suffix?: any;
  prefix?: any;
  readOnly?: boolean;
  isRef?: any;
  autoFocus?: boolean;
  onKeyPress?: any;
}

const Input = ({
  size = "md",
  onChange,
  value,
  placeholder,
  type,
  sub,
  style,
  // disabled,
  suffix,
  prefix,
  readOnly,
  isRef,
  onKeyPress,
  autoFocus
}: InputProps) => {
  const numRef = useRef<HTMLInputElement>();
  return (
    <Styled.InputWrapper size={size} style={style}>
      <OutlinedInput
        autoFocus={autoFocus}
        inputProps={{
          inputMode: type === "number" ? "decimal" : undefined
        }}
        inputRef={isRef}
        onKeyDown={(e) => (onKeyPress ? onKeyPress(e) : {})}
        endAdornment={
          suffix ? (
            <InputAdornment position="end">{suffix}</InputAdornment>
          ) : undefined
        }
        startAdornment={
          prefix ? (
            <InputAdornment position="start">{prefix}</InputAdornment>
          ) : undefined
        }
        value={value}
        onChange={readOnly ? () => {} : onChange}
        placeholder={placeholder}
        type={type === "number" ? "numberic" : type}
      />

      {sub && (
        <Styled.Div padding="4px  0px 0px var(--layout-padding)">
          {typeof sub === "string" ? (
            <Typography variant="c2" color="--light-color">
              {sub}
            </Typography>
          ) : (
            sub
          )}
        </Styled.Div>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;
