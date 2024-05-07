import { uuid } from "@/utils/commonUtil";
import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  RadioGroup
} from "@mui/material";
import * as Styled from "../styled";
import Typography from "../typography";
import Icon from "../icon";

interface RadioItemProps {
  label?: string;
  value: any;
  disabled?: boolean;
}
export interface RadioProps {
  type?: "button";
  list: RadioItemProps[];
  onChange?: (e: any) => void;
  isWrap?: boolean;
  size?: "md" | "sm";
  value?: string | string[]; // isMulti === true -> []
  color?: string;
  style?: any;
  isMulti?: boolean;
}

const Radio = ({
  list,
  value,
  onChange,
  isWrap,
  color,
  style,
  isMulti = false // button type 때만 적용
}: RadioProps) => {
  if (!list || list?.length === 0) return;

  const handleChange = (item: RadioItemProps) => {
    if (item?.disabled) return;
    if (!onChange) return;

    if (!isMulti) return onChange(item.value);

    if (typeof value === "string") return;

    const ret: string[] = [];
    if (value?.find((val) => val === item.value)) {
      return onChange(value.filter((val) => val !== item.value));
    }
    onChange(
      value && value?.length > 0 ? value.concat([item.value]) : [item.value]
    );
  };
  const checkActive = (item: RadioItemProps): boolean => {
    if (typeof value === "string" && value === item.value) return true;
    else if (
      typeof value !== "string" &&
      value?.find((val) => val === item.value)
    ) {
      return true;
    } else return false;
  };
  return (
    <Styled.RadioButtonWrapper
      style={style}
      color={color ? color : "--dark-color"}
      wrap={isWrap ? "wrap" : "nowrap"}
    >
      {list?.map((item) => {
        return (
          <button
            className={
              item?.disabled
                ? "radio-disabled"
                : checkActive(item)
                  ? "radio-checked"
                  : ""
            }
            onClick={() => handleChange(item)}
          >
            <Typography variant="c2"> {item.label}</Typography>
            {checkActive(item) && (
              <Icon name="Check" size={15} color="--white-color" />
            )}
          </button>
        );
      })}
    </Styled.RadioButtonWrapper>
  );
};

export default Radio;
