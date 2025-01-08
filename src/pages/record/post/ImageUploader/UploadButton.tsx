import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ChangeEvent, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Icon from 'src/components/Icon';

interface UploadButtonProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default forwardRef<HTMLInputElement, UploadButtonProps>(
  ({ onFileChange, onClick }, ref) => {
    const { palette } = useTheme();

    const { watch } = useFormContext();

    return (
      <Stack
        minWidth={80}
        height={80}
        border="1px solid"
        borderColor="grey.200"
        borderRadius={1}
        justifyContent="center"
        alignItems="center"
        onClick={onClick}
      >
        <input
          type="file"
          ref={ref}
          onChange={onFileChange}
          style={{ display: 'none' }}
        />
        <Icon name="CameraSvg" size={24} />
        <Box>
          <Typography color="primary.light" variant="Body14/light">
            {watch('images')?.length}
          </Typography>

          <Typography
            color={palette.mode === 'light' ? 'grey.600' : 'white'}
            variant="Body14/light"
          >
            /10
          </Typography>
        </Box>
      </Stack>
    );
  }
);
