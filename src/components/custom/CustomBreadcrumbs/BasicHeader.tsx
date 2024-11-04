import { Box, Typography, useTheme } from '@mui/material';
import Icon from '../../Icon';
import { ReactNode } from 'react';

interface Iheader {
  isStart?: boolean;
  isEnd?: boolean;
  title?: ReactNode | string;
}
export default function BasicHeader({ isStart, isEnd, title }: Iheader) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      width={'100%'}
      alignItems={'center'}
    >
      {isStart && (
        <Icon
          name={'ArrowBack'}
          sx={{ marginTop: '-1px', color: '#262626' }}
          size={16}
        />
      )}

      <Box flex={1}>
        {title && (
          <Typography
            variant="Body18/bold"
            children={title}
            color={black}
            sx={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
      </Box>
      {isEnd && <Icon size={22} name={'BellSvg'} />}
    </Box>
  );
}
