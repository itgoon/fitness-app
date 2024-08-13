import { Switch as MuiSwitch } from "@mui/material";

interface SwitchProps {
  checked?: boolean;
  onChange?: (e: any) => void;
}
const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <MuiSwitch
      // defaultChecked
      inputProps={{ "aria-label": "ant design" }}
      checked={checked}
      onChange={onChange ? onChange : () => {}}
    />
  );
};

export default Switch;
