import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  TypographyPropsVariantOverrides,
  useTheme
} from '@mui/material';
import Icon from 'src/components/Icon';
interface ICondition {
  label: string;
  onClick?: () => void;
  onChange?: () => void;
  isChecked: boolean;
  variant?: keyof TypographyPropsVariantOverrides;
}
export default function RegisterCondition({
  label,
  onClick,
  onChange,
  variant = 'Body16/light',
  isChecked
}: ICondition) {
  const theme = useTheme();
  const light = theme.palette.mode === 'light';
  const grey900 = light ? theme.palette.grey[900] : 'white';
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <FormControlLabel
        label={
          <Typography variant={variant} children={label} color={grey900} />
        }
        control={
          <Checkbox
            checked={isChecked}
            onChange={onChange}
            checkedIcon={<Icon name={'CheckSvg'} />}
            icon={<Icon name={'CheckSvg'} />}
          />
        }
      />
      {onClick && <Icon name="RightArrowSvg" onClick={onClick}></Icon>}
    </Box>
  );
}
