import { Box, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import Button from 'src/components/Button';
import FieldTitle from './FieldTitle';

export default function CategoryField() {
  const { setValue } = useFormContext();

  return (
    <Stack>
      <FieldTitle label="어떤 기록을 남기시나요" />
      <Box display={'flex'} gap={2} width={'100%'}>
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={() => setValue('type', 'workout')}
        >
          운동
        </Button>
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={() => setValue('type', 'diet')}
        >
          식단
        </Button>
      </Box>
    </Stack>
  );
}
