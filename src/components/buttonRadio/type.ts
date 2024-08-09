import { Box, Radio, RadioProps, RadioGroup } from "@mui/material";

export interface RadioItemProps {
  label?: string;
  value: any;
  disabled?: boolean;
}
export interface CustomRadioProps extends RadioProps {
  type?: "button";
  list: RadioItemProps[];
  onChange?: (e: any) => void;
  isWrap?: boolean;
  value?: string | string[]; // isMulti === true -> []
  isMulti?: boolean;
}
