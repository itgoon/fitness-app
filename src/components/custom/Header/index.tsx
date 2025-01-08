import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Prev } from '../../Icon/HeaderIcon';
import Icon from '../../Icon';
import { NavItemType } from '../../../data/menus';

// 불필요한 코드가 너무 많음. 안쓰는걸 안지움
// 하나의 컴포넌트, 함수에서 너무 많이 처리함
// 불필요한 useEffect

interface IHeader {
  currentData: NavItemType | null;
}
export default function Header({ currentData }: IHeader) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  const navigate = useNavigate();

  const title = currentData?.title ?? '';
  const url = currentData?.url ?? '';
  const isStartIcon = url !== '/dashboard';

  return (
    <header
      role="presentation"
      style={{ height: 56, paddingBlock: 15, paddingInline: 16 }}
    >
      <Box display={'flex'} alignItems={'center'} width={'100%'}>
        <Box width={22} paddingTop={0.25}>
          {isStartIcon && <Prev onClick={() => navigate(-1)} />}
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
          {!isStartIcon && <Icon size={24} name={'BellSvg'} />}
        </Box>
      </Box>
    </header>
  );
}
