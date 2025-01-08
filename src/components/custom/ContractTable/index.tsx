import { List, MenuItem, Stack, Typography, useTheme } from '@mui/material';

type list = {
  label: string;
  value: string;
};
interface IContractTable {
  title: string;
  list: list[];
  gap?: number;
}
export default function ContractTable({ list, title, gap }: IContractTable) {
  const theme = useTheme();
  const { palette } = theme;
  const light = theme.palette.mode === 'light';

  const white = light ? palette.common.white : palette.common.black;

  const black = !light ? palette.common.white : palette.common.black;
  const bgColor = light ? palette.grey[800] : palette.common.white;

  const borderStyle = `1px solid ${palette.grey[200]}`;

  if (list === undefined) return;
  return (
    <Stack gap={gap || 2}>
      <Typography variant="Body18/bold" children={title} color={black} />
      <List disablePadding>
        {list.map((li, key) => (
          <MenuItem
            key={key}
            sx={{ padding: 0, margin: `0 !important`, minHeight: 48 }}
          >
            <Typography
              variant="Body14/semiBold"
              bgcolor={bgColor}
              width={90}
              height={48}
              alignContent="center"
              textAlign="center"
              color={white}
              borderTop={key !== 0 ? `1px solid ${white}` : undefined}
            >
              {li.label}
            </Typography>
            <Typography
              variant="Body16/regular"
              width="calc(100% - 90px)"
              height={48}
              color={black}
              padding={1.5}
              borderTop={borderStyle}
              borderRight={borderStyle}
              borderBottom={key === list.length - 1 ? borderStyle : undefined}
            >
              {li.value}
            </Typography>
          </MenuItem>
        ))}
      </List>
    </Stack>
  );
}
