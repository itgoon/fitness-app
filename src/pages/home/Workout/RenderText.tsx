import { Stack, Typography, useTheme } from '@mui/material';

interface IRenderText {
  label: string;
  time: string;
  onClick?: () => void;
}
export default function RenderText({ label, time, onClick }: IRenderText) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey900 = light ? palette.grey[900] : 'white';
  const grey = light ? palette.grey[500] : palette.grey[600];

  return (
    <Stack gap={0.5} onClick={onClick}>
      <Typography variant="Body14/regular" color={grey}>
        {label}
      </Typography>
      <Typography variant="Body20/bold" color={grey900}>
        {time}
      </Typography>
    </Stack>
  );
}
