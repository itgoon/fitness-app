import * as Styled from "../styled";
import { AntSwitch } from "../styled";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";

interface SwitchProps {
  checked?: boolean;
  onChange?: (e: any) => void;
}
const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <AntSwitch
      defaultChecked
      inputProps={{ "aria-label": "ant design" }}
      checked={checked}
      onChange={onChange ? onChange : () => {}}
    />
  );
};

export default Switch;
