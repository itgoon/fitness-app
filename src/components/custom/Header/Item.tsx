import { Box, Typography, useTheme } from '@mui/material';
import Icon from '../../Icon';
import { Iheader } from './types';
import { useNavigate } from 'react-router';

export default function Item({ isStart, isEnd, title }: Iheader) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      width={'100%'}
      alignItems={'center'}
    >
      {isStart && (
        <Icon
          name={'LeftArrow'}
          sx={{ marginTop: '-1px', color: '#262626' }}
          size={16}
          onClick={() => navigate(-1)}
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
