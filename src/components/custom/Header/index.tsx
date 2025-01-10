import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Prev } from '../../Icon/HeaderIcon';
import Icon from '../../Icon';
import { NavItemType } from '../../../data/menus';

interface IHeader {
  currentData?: NavItemType | null;
  title?: string;
}
export default function Header({ currentData, title }: IHeader) {
  const navigate = useNavigate();

  const headerTitle = currentData?.title ?? '';

  const url = currentData?.url ?? '';

  const isStartIcon = url !== '/dashboard';

  return (
    <header
      role="presentation"
      style={{ height: 56, paddingBlock: 15, paddingInline: 16 }}
    >
      <Box display="flex" alignItems="center" width="100%">
        <Box width={22} paddingTop={0.25}>
          {isStartIcon && <Prev onClick={() => navigate(-1)} />}
        </Box>

        <Box flex={1}>
          {headerTitle && (
            <Typography
              variant="Body18/bold"
              children={headerTitle}
              color="text.primary"
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
          )}
        </Box>

        <Box width={22} paddingTop={0.25}>
          {!isStartIcon && <Icon size={24} name="BellSvg" />}
        </Box>
      </Box>
    </header>
  );
}
