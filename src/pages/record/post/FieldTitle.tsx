import { SxProps, Typography, useTheme } from '@mui/material';

interface FieldTitleProps {
  label: string;
  sx?: SxProps;
}

export default function FieldTitle({ label, sx }: FieldTitleProps) {
  const { palette } = useTheme();

  return (
    <Typography
      variant="Body14/semiBold"
      marginBottom={1.5}
      color={palette.mode === 'light' ? 'grey.900' : 'white'}
      sx={sx}
    >
      {label}
    </Typography>
  );
}
