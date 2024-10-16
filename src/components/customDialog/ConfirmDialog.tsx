import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useTranslate } from 'src/locales';

import { ConfirmDialogProps } from './types';

// ----------------------------------------------------------------------

export default function ConfirmDialog({
  title,
  content,
  action,
  open,
  onClose,
  onClick,
  contentStyle,
  maxWidth = 'xs',
  ...other
}: ConfirmDialogProps) {
  const { t } = useTranslate();

  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      {content && (
        <DialogContent sx={{ typography: 'body2' }} style={contentStyle || {}}>
          {' '}
          {content}{' '}
        </DialogContent>
      )}

      <DialogActions>
        {action}

        {!action && (
          <Button variant="outlined" color="inherit" onClick={onClick}>
            {t('확인')}
          </Button>
        )}

        {!action && (
          <Button variant="outlined" color="inherit" onClick={onClose}>
            {t('취소')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
