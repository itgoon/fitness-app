import {
  Box,
  List,
  MenuItem,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import Icon from '../../Icon';
import Button from '../../Button';
import { IResponsePage } from './types';

export default function ResponsePage({
  iconName = 'CheckSvg',
  title,
  iconSize = 50,
  dataList,
  onHome,
  onClick,
  closeMsg,
  clickMsg
}: IResponsePage) {
  const theme = useTheme();
  const { palette } = theme;
  const grey500 = palette.grey[500];
  return (
    <>
      <Stack alignItems={'center'} gap={7.5}>
        <Stack alignItems={'center'} gap={2}>
          <Icon name={iconName} size={iconSize} />
          <Typography variant={'Body20/semiBold'} children={title} />
        </Stack>
        <List sx={{ width: '100%', padding: 0 }}>
          {dataList?.map((li, key) => (
            <MenuItem
              key={key}
              sx={{
                justifyContent: 'space-between',
                borderBottom: `1px solid ${palette.grey[200]}`
              }}
            >
              <Typography variant="Body16/regular" color={grey500}>
                {li.label}
              </Typography>
              <Typography variant="Body16/semiBold">{li.value}</Typography>
            </MenuItem>
          ))}
        </List>
      </Stack>

      <Box width={'100%'} display={'flex'} gap={1}>
        <Button
          size={'large'}
          children={closeMsg}
          variant={'outlined'}
          color="primary"
          onClick={onClick}
        />
        <Button
          size={'large'}
          children={clickMsg}
          variant={'contained'}
          color="primary"
          onClick={onHome}
        />
      </Box>
    </>
  );
}
