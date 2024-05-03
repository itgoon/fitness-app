import { uuid } from "@/utils/commonUtil";
import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  RadioGroup
} from "@mui/material";
import * as Styled from "../styled";
import Typography from "../typography";
import Icon from "../icon";
export interface RadioProps {
  list: { label?: string; value: any; disabled?: boolean }[];
  onChange?: (e: any) => void;
  isWrap?: boolean;
  size?: "md" | "sm";
  value?: string;
  color?: string;
  style?: any;
  isMulti?: boolean;
}

const Radio = ({ list, value, onChange }: RadioProps) => {
  if (!list || list?.length === 0) return;

  return (
    <Styled.RadioWrapper>
      <RadioGroup
        defaultValue={
          value ? value : list?.length > 0 ? list[0]?.value : undefined
        }
        name={`radio-${uuid()}`}
        onChange={(e, checked) =>
          onChange ? onChange(checked) : console.log({ e })
        }
      >
        {list?.map((item) => {
          return (
            <label>
              <p>{item.label}</p>
              <MuiRadio
                value={item.value}
                disabled={item?.disabled ? true : false}
              />
            </label>
          );
        })}
      </RadioGroup>
    </Styled.RadioWrapper>
  );
};

export default Radio;
