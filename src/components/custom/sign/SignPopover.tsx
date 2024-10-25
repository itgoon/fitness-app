import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { ISignPopover } from './types';
import Button from '../../Button';

export default function SignPopover({
  open,
  onClick,
  onClose,
  ...other
}: ISignPopover) {
  return (
    <Dialog open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>
        <Typography
          children={'서명을 입력해주세요'}
          variant="Body18/semiBold"
          color={'primary'}
        />
      </DialogTitle>
      <Typography children={'지우기'} variant="Body16/regular" />

      <DialogContent></DialogContent>

      <DialogActions>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClose}
          children={'취소'}
        />
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClick}
          children={'서명 완료'}
        />
      </DialogActions>
    </Dialog>
  );
}
