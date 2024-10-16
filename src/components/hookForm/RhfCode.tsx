import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MuiOtpInput, MuiOtpInputProps } from 'mui-one-time-password-input';

import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

type RHFCodesProps = MuiOtpInputProps & {
  name: string;
  onChange: (code: string) => void;
};

export default function RHFCode({ name, onChange, ...other }: RHFCodesProps) {
  const { control } = useFormContext();
  const [code, setCode] = useState('');

  const handleChange = (value: string) => {
    if (value.length <= 6) {
      setCode(value);
      onChange(value);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <MuiOtpInput
            {...field}
            value={code}
            autoFocus
            gap={1.5}
            length={6}
            TextFieldsProps={{
              error: !!error,
              placeholder: '-',
            }}
            onChange={handleChange}
            {...other}
          />

          {error && (
            <FormHelperText sx={{ px: 2 }} error>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
