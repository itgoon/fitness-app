import { Divider as MuiDivider } from '@mui/material';

interface IDivider {
  borderBottomWidth?: number;
}
export default function Divider({ borderBottomWidth = 8 }: IDivider) {
  return <MuiDivider sx={{ borderBottomWidth }} />;
}
