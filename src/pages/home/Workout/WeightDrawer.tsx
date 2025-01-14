import {
  InputAdornment,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import Button from 'src/components/Button';

interface WeightDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function WeightDrawer({
  isOpen,
  onOpen,
  onClose
}: WeightDrawerProps) {
  const [weight, setWeight] = useState<number>(0);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;

    setWeight(Number(value));
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      aria-hidden="false"
    >
      <Stack spacing={5} sx={{ width: '100%', height: 274 }}>
        <Typography
          sx={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600 }}
        >
          오늘의 체중을 기록해주세요
        </Typography>

        <TextField
          label="체중"
          size="large"
          variant="standard"
          value={weight}
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
          }}
          inputProps={{
            sx: {
              color: 'text.primary',
              borderBottom: '1px solid',
              backgroundColor: 'transparent',
              borderColor: 'grey.300',
              '&::placeholder': {
                color: 'grey.600'
              }
            }
          }}
        />

        <Button
          color="primary"
          typoVariant="Body18/semiBold"
          size="large"
          variant="contained"
        >
          확인
        </Button>
      </Stack>
    </SwipeableDrawer>
  );
}
