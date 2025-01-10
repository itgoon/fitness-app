import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Prev } from 'src/components/Icon/HeaderIcon';

interface HeaderProps {
  title?: string;
}

export default function StackHeader({ title }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header
      role="presentation"
      style={{ height: 56, paddingBlock: 15, paddingInline: 16 }}
    >
      <Box display="flex" alignItems="center" width="100%">
        <Box width={22} paddingTop={0.25}>
          <Prev onClick={() => navigate(-1)} />
        </Box>

        <Box flex={1}>
          {title && (
            <Typography
              variant="Body18/bold"
              children={title}
              color="text.primary"
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
          )}
        </Box>
      </Box>
    </header>
  );
}
