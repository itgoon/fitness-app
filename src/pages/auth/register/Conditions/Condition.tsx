import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  TypographyPropsVariantOverrides
} from "@mui/material";
import Icon from "src/components/Icon";
interface ICondition {
  label: string;
  onClick?: () => void;
  onChange?: () => void;
  isChecked: boolean;
  variant?: keyof TypographyPropsVariantOverrides;
}
export default function Condition({
  label,
  onClick,
  onChange,
  variant = "Body16/light",
  isChecked
}: ICondition) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <FormControlLabel
        label={<Typography variant={variant} children={label} />}
        control={
          <Checkbox
            checked={isChecked}
            onChange={onChange}
            checkedIcon={<Icon name={"CheckSvg"} />}
            icon={<Icon name={"CheckSvg"} />}
          />
        }
      />
      {onClick && <Icon name="RightArrowSvg" onClick={onClick}></Icon>}
    </Box>
  );
}
