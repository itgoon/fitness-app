import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useTranslate } from 'src/locales';

import { ConfirmDialogProps } from './types';
import Button from '../Button';

// ----------------------------------------------------------------------

export default function ConfirmDialog({
  title,
  content,
  action,
  open,
  onClose,
  onClick,
  clickMsg,
  closeMsg,
  contentStyle,
  maxWidth = 'xs',
  ...other
}: ConfirmDialogProps) {
  const { t } = useTranslate();
  const color = 'primary';
  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
      {...other}
    >
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      {content && (
        <DialogContent
          sx={{ typography: 'Body16/regular', textAlign: 'center' }}
          style={contentStyle || {}}
        >
          {' '}
          {content}{' '}
        </DialogContent>
      )}

      <DialogActions>
        {action}

        {!action && (
          <Button variant="outlined" color="inherit" onClick={onClose}>
            {closeMsg}
          </Button>
        )}

        {!action && (
          <Button
            variant="contained"
            color={color ? color : 'primary'}
            onClick={onClick}
          >
            {clickMsg}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
