import { TextField as CustomTextFiled, TextFieldProps } from '@mui/material';

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}
type TtextField = TextFieldProps & {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};
export default function TextField({
  size = 'medium',
  fullWidth = true,
  ...props
}: TtextField) {
  return (
    <CustomTextFiled
      fullWidth={fullWidth}
      size={size}
      {...props}
    ></CustomTextFiled>
  );
}
