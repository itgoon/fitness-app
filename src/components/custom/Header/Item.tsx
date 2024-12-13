import { Box, Typography, useTheme } from '@mui/material';
import Icon from '../../Icon';
import { Iheader } from './types';
import { useNavigate } from 'react-router';
import { Prev } from '../../Icon/HeaderIcon';

export default function Item({ isStart, isEnd, title }: Iheader) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  const navigate = useNavigate();
  return (
    <Box display={'flex'} width={'100%'}>
      <Box width={22} paddingTop={0.1}>
        {!isStart && <Prev onClick={() => navigate(-1)} />}
      </Box>
      <Box flex={1}>
        {title && (
          <Typography
            variant="Body18/bold"
            lineHeight={'27px'}
            children={title}
            color={black}
            sx={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
      </Box>
      <Box width={22} paddingTop={0.1}>
        {isEnd && <Icon size={24} name={'BellSvg'} />}
      </Box>
    </Box>
  );
}
