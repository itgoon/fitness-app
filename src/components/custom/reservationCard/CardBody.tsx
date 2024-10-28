import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ICardBody } from './types';
import Icon from '../../Icon';
import EmptyCard from '../customCard/EmptyCard';

const Content = ({ children }: any) => {
  return (
    <Box display={'flex'} gap={0.25} alignItems={'center'}>
      {children}
    </Box>
  );
};

export default function CardBody({
  chipLabel,
  cardDataList,
  cardSx
}: ICardBody) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey900 = light ? theme.palette.grey[900] : 'white';
  const iconColor = light ? '#BDBDBD' : '#fff';

  const iconName =
    chipLabel === 'warning'
      ? 'Orange'
      : chipLabel === 'error'
        ? 'Red'
        : chipLabel === 'primary'
          ? 'Blue'
          : 'DumbelSvg';
  return (
    <EmptyCard
      justifyContent="start"
      borderRadius={2}
      padding={'20px 24px'}
      gap={2}
      sx={cardSx}
    >
      <Icon name={iconName} size={60} sx={{ margin: '9px 0' }} />

      <Stack gap={1}>
        <Typography variant="Body18/bold" children={'time'} color={grey900} />
        <Stack gap={0.5}>
          {cardDataList?.map((card, key) => (
            <Content key={key}>
              {/* <Icon size={16} name="Location /Receipt" color={iconColor} /> */}
              <Icon size={16} name={card.iconName} color={iconColor} />
              <Typography
                variant="Body14/regular"
                children={card.label}
                color={grey900}
              />
            </Content>
          ))}
        </Stack>
      </Stack>
    </EmptyCard>
  );
}
