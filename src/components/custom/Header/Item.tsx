import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import Icon from '../../Icon';
import { Prev } from '../../Icon/HeaderIcon';

export default function Item({ isStart, isEnd, title }: any) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box width={22} paddingTop={0.25}>
        {isStart && <Prev onClick={() => navigate(-1)} />}
      </Box>
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

      <Box width={22} paddingTop={0.25}>
        {isEnd && <Icon size={24} name="BellSvg" />}
      </Box>
    </Box>
  );
}
