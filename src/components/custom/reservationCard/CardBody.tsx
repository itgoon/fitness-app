import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';
import { ICardBody } from './types';
import Icon from '../../Icon';
import EmptyCard from '../customCard/EmptyCard';
import { chipChange } from '../../../utils/chipChange';
import { getPeriodTime, getTimeDifference } from '../../../utils/formatTime';

const Content = ({ children }: any) => {
  return (
    <Box display={'flex'} gap={0.25} alignItems={'center'}>
      {children}
    </Box>
  );
};

export default function CardBody({ cardData, cardSx }: ICardBody) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey300 = light ? theme.palette.grey[300] : 'white';
  const grey900 = light ? theme.palette.grey[900] : 'white';
  const iconColor = light ? '#BDBDBD' : '#fff';

  const { chipState, time, count, place, trainer, weight } = cardData;

  const iconName = chipChange(chipState).iconName;

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
        <Typography
          variant="Body18/bold"
          children={
            chipState != undefined
              ? getPeriodTime(time)
              : getTimeDifference(time)
          }
          color={grey900}
        />
        {chipState != undefined ? (
          <Stack gap={0.5}>
            <Content>
              <Icon size={16} name={'Location'} color={iconColor} />
              <Typography
                variant="Body14/regular"
                children={place}
                color={grey900}
              />
            </Content>
            <Content>
              <Icon size={16} name={'Receipt'} color={iconColor} />

              <Box display={'flex'} gap={1.25}>
                <Typography
                  variant="Body14/regular"
                  children={count}
                  color={grey900}
                />
                <Divider sx={{ borderWidth: 1, borderColor: grey300 }} />
                <Typography
                  variant="Body14/regular"
                  children={trainer}
                  color={grey900}
                />
              </Box>
            </Content>
          </Stack>
        ) : (
          <Content>
            <Icon size={16} name={'WeightSvg'} color={iconColor} />
            <Typography
              variant="Body14/regular"
              children={weight}
              color={grey900}
            />
          </Content>
        )}
      </Stack>
    </EmptyCard>
  );
}
