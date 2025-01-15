import { Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FieldTitle from '../FieldTitle';
import Tabs from './Tabs';

export default function CategoryField() {
  const { setValue, watch } = useFormContext();

  return (
    <Stack>
      <FieldTitle label="어떤 기록을 남기시나요" />
      <Tabs
        value={watch('type')}
        onChange={(e, value) => setValue('type', value)}
        list={[
          { value: 'workout', label: '운동' },
          { value: 'diet', label: '식단' }
        ]}
      />
    </Stack>
  );
}
