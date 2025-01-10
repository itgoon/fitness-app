import { Box, SxProps, Typography, useTheme } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

interface IEmptyCard {
  margin?: string;
  padding?: string;
  children: ReactNode | ReactElement | string;
  borderRadius?: number;
  gap?: number;
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'space-between' | 'start' | 'end';
  alignItems?: 'center' | 'space-between' | 'start' | 'end';
  sx?: SxProps;
}
export default function EmptyCard({
  margin,
  children,
  padding,
  borderRadius = 1,
  gap,
  direction,
  justifyContent,
  alignItems,
  sx
}: IEmptyCard) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey400 = palette.grey[400];
  const grey500 = palette.grey[500];
  const grey600 = light ? palette.grey[600] : 'white';
  const blgrey = light ? palette.grey.A200 : grey400;
  const grey900 = light ? palette.grey[900] : 'white';

  return (
    <Box
      display="flex"
      justifyContent={justifyContent || 'center'}
      alignItems={alignItems}
      flexDirection={direction}
      gap={gap}
      bgcolor={blgrey}
      margin={margin}
      padding={padding || '12px 0'}
      borderRadius={borderRadius}
      sx={{ ...sx }}
    >
      {typeof children === 'string' ? (
        <Typography
          variant="Body16/regular"
          color={grey500}
          children={children}
        />
      ) : (
        <>{children}</>
      )}
    </Box>
  );
}
