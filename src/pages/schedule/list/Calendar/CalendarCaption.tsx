import { Badge, Box, Stack, Typography } from '@mui/material';
import Divider from 'src/components/custom/Divider';

export default function CalendarCaption() {
  return (
    <Stack sx={{ px: 1.5, gap: 1 }}>
      <Box sx={{ display: 'flex', gap: 3.25, px: 2.5 }}>
        <Box>
          <Badge
            sx={{ '.MuiBadge-badge': { top: '-4px', right: '3px' } }}
            color="warning"
            variant="alway"
          />
          <Typography variant="Body14/regular">레슨</Typography>
        </Box>
        <Box>
          <Badge
            sx={{ '.MuiBadge-badge': { top: '-4px', right: '4px' } }}
            color="success"
            variant="online"
          />
          <Typography variant="Body14/regular">운동</Typography>
        </Box>
      </Box>
      <Divider borderBottomWidth={1} />
    </Stack>
  );
}
