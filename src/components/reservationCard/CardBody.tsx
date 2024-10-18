import { Box, Stack, Typography, useTheme } from '@mui/material';
import Icon from '../Icon';
import { ICardBody } from './types';

const Content = ({ children }: any) => {
  return (
    <Box display={'flex'} gap={0.25} alignItems={'center'}>
      {children}
    </Box>
  );
};

export default function CardBody({ chipLabel }: ICardBody) {
  const theme = useTheme();
  const blgrey = theme.palette.grey.A200;
  const iconName =
    chipLabel === 'warning' ? 'Orange' : chipLabel === 'error' ? 'Red' : 'Blue';
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      borderRadius={2}
      paddingX={2.5}
      paddingY={3}
      bgcolor={blgrey}
      gap={2}
    >
      <Icon name={iconName} size={60} sx={{ margin: '9px 0' }} />

      <Stack gap={1}>
        <Typography variant="Body18/bold">time</Typography>
        <Stack gap={0.5}>
          <Content>
            <Icon size={16} name="Location" />
            <Typography variant="Body14/regular">place</Typography>
          </Content>
          <Content>
            <Icon color={'#BDBDBD'} size={16} name="Receipt" />
            <Typography variant="Body14/regular">num</Typography>
          </Content>
        </Stack>
      </Stack>
    </Box>
  );
}
