import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Icon from 'src/components/Icon';
import { Menu } from './config';

interface IHeader {
  currentData?: Menu | null;
}

export default function Header({ currentData }: IHeader) {
  const navigate = useNavigate();

  // 경로 따라서 아이콘 조건부 렌더링

  return (
    <header
      role="presentation"
      style={{ height: 56, paddingBlock: 15, paddingInline: 16 }}
    >
      <Box display="flex" alignItems="center" width="100%">
        {/* 좌측 아이콘 */}

        <Box flex={1}>
          <Typography
            variant="Body18/bold"
            color="text.primary"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {currentData?.title}
          </Typography>
        </Box>

        {/* 우측 아이콘 */}
        <Box width={22} paddingTop={0.25}>
          <Icon size={24} name="BellSvg" />
        </Box>
      </Box>
    </header>
  );
}
