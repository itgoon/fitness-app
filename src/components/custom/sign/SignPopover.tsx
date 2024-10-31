import { Box, Dialog, Stack, Typography, useTheme } from '@mui/material';
import { ISignPopover } from './types';
import Button from '../../Button';
import SignCanvas from './SignCanvas';

export default function SignPopover({
  open,
  onClick,
  onClose,
  signRef,
  isSigned,
  clear,
  setIsSigned,
  data,
  ...other
}: ISignPopover) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  const grey500 = palette.grey[500];
  const grey300 = palette.grey[300];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          padding: 2.5,
          gap: 2.5,
          borderRadius: 1.5
        }
      }}
      {...other}
    >
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography
          children={'서명을 입력해주세요'}
          variant="Body18/semiBold"
          color={'primary'}
        />
        <Typography
          children={'지우기'}
          variant="Body16/regular"
          color={grey600}
          onClick={clear}
        />
      </Stack>

      {/* px={11.4} py={13.5} */}
      <Box bgcolor={grey300} borderRadius={1.5}>
        <SignCanvas
          defaultValue={data}
          placeholder={'여기에 서명해주세요'}
          typoColor={grey500}
          signRef={signRef}
          isSigned={isSigned}
          setIsSigned={setIsSigned}
        />
      </Box>

      <Stack direction={'row'} gap={2}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClose}
          children={'취소'}
          typoVariant={'Body16/semiBold'}
          sx={{ minHeight: 48 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
          children={'서명 완료'}
          typoVariant={'Body16/semiBold'}
          sx={{ minHeight: 48 }}
        />
      </Stack>
    </Dialog>
  );
}
