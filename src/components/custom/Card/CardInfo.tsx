import { Box, Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import Icon from 'src/components/Icon';
import { IconsType } from 'src/components/Icon/types';

interface CardInfoProps {
  iconName: IconsType;
}

export default function CardInfo({
  iconName,
  children
}: PropsWithChildren<CardInfoProps>) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Icon
        size={18}
        name={iconName}
        color={theme.palette.mode === 'light' ? '#BDBDBD' : '#fff'}
      />
      <Typography variant="Body14/regular" color="grey.900">
        {children}
      </Typography>
    </Box>
  );
}
