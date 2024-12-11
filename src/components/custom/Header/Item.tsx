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
    <Box display={'flex'} width={'100%'}>
      {isStart && (
        <Icon
          name={'ArrowBackIosNewRounded'}
          sx={{ marginTop: 2 }}
          size={24}
          onClick={() => navigate(-1)}
        />
      )}

      <Box flex={1}>
        {title && (
          <Typography
            variant="Body18/bold"
            lineHeight={'26px'}
            children={title}
            color={black}
            sx={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
      </Box>
      {isEnd && <Icon size={24} name={'BellSvg'} />}
    </Box>
  );
}
