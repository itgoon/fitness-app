import { Box, Stack, Typography, useTheme } from '@mui/material';
import Icon from '../../../components/Icon';

interface IListItem {
  label: string;
  value: string;
}
export default function ListItem({ label, value }: IListItem) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  return (
    <Box display="flex" justifyContent="space-between" py={1.5}>
      <Typography variant="Body16/regular" color={grey600} children={label} />
      <Box display="flex" gap={1}>
        <Typography variant="Body16/semiBold" children={value} />
        <Icon
          sx={{ marginTop: 2 }}
          name="ModeEditRounded"
          color={palette.grey[400]}
        />
      </Box>
    </Box>
  );
}
