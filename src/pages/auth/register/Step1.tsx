import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import { RHFTextField } from "src/components/hookForm";

export interface StepProps {
  onNext?: () => void;
}

export default function Step1({ onNext }: StepProps) {
  return (
    <Stack spacing={3}>
      <RHFTextField
        name="store"
        label="업체 명"
        placeholder="지점 혹은 센터 이름을 입력해주세요."
      />
    </Stack>
  );
}
