import { Stack, Typography } from '@mui/material';
import Icon from '../Icon';
import { IconsType } from '../Icon/types';

interface ResponseHeaderProps {
  icon: IconsType;
  title: string;
}

export default function ResponseHeader({ icon, title }: ResponseHeaderProps) {
  return (
    <Stack sx={{ alignItems: 'center', gap: 2 }}>
      <Icon name={icon} size={50} />
      <Typography variant="Body20/semiBold">{title}</Typography>
    </Stack>
  );
}
