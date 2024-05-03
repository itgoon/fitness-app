import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from "@mui/material";
import * as Styled from "../styled";
import Typography from "../typography";

export interface CheckboxProps {
  label?: string;
  defaultColor?: string;
  activeColor?: string;
  opacity?: string;
  checked?: boolean;
  onClick?: (e: boolean) => void;
  style?: any;
  labelStyle?: any;
}

const Checkbox = ({
  label,
  defaultColor = "--light-color",
  opacity = "0.6",
  checked,
  onClick,
  style,
  labelStyle,
  ...props
}: CheckboxProps) => {
  return (
    <Styled.CheckboxWrapper
      style={style}
      color={defaultColor}
      opacity={opacity}
    >
      <MuiCheckbox
        {...props}
        checked={checked}
        onClick={() => (onClick ? onClick(!checked) : {})}
      />
      {label && (
        <Typography
          variant={"c2"}
          color={defaultColor}
          opacity={opacity}
          style={labelStyle}
        >
          {label}
        </Typography>
      )}
    </Styled.CheckboxWrapper>
  );
};

export default Checkbox;
