import { List, ListItem, Stack, Typography } from '@mui/material';
import Logo from '../logo';

// ----------------------------------------------------------------------

const footerList = [
  { label: '회사명', value: '잇군' },
  { label: '주소', value: '경기 부천시 원미구 신흥로 223, 1118호' },
  { label: '대표', value: '오군영' },
  { label: '사업자번호', value: '123-45-67890' },
  { label: '문의메일', value: 'help@itgoon.com' }
];
// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Stack padding="60px 20px" gap={2}>
      <Logo isFooter />
      <List component="nav">
        {footerList.map((li, key) => (
          <ListItem key={key} sx={{ padding: 0, paddingBottom: 0.5 }}>
            <Typography variant="Body11/regular" color="grey.600">
              {li.label}: {li.value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
