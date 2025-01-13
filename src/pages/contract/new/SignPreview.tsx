import { Box } from '@mui/material';

interface SignPreviewProps {
  preview: string;
}

export default function SignPreview({ preview }: SignPreviewProps) {
  return (
    <Box sx={{ backgroundColor: 'grey.50', borderRadius: 0.5 }}>
      <img src={preview} alt="sign" />
    </Box>
  );
}
