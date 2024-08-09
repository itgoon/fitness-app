import {
  Box,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  RadioGroup
} from "@mui/material";
import Typography from "../typography";
import Icon from "../icon";
import { CustomRadioProps, RadioItemProps } from "./type";

const Radio = ({
  list,
  value,
  onChange,
  isMulti = false // button type 때만 적용
}: CustomRadioProps) => {
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
    <Box>
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
    </Box>
  );
};

export default Radio;
