import { Box, Typography } from '@mui/material';

interface DetailCardInfoProps {
  label: string;
  value: string;
}

export default function DetailCardInfo({ label, value }: DetailCardInfoProps) {
  return (
    <Box display="flex" justifyContent="space-between" py={1.5}>
      <Typography variant="Body16/regular" color="grey.600">
        {label}
      </Typography>

      <Typography variant="Body16/semiBold">{value}</Typography>
    </Box>
  );
}
