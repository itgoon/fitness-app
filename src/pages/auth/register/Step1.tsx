import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "src/components/Button";
import Wrap from "./Wrap";
import RegisterHeader from "./RegisterHeader";
import TextField from "src/components/TextField";
const stepsChild = [
  { label: "확인", value: "이름을 입력해주세요" },
  { label: "확인", value: "생년월일을 입력해주세요" },
  { label: "본인인증", value: "휴대폰 번호를 입력해주세요" }
];
export interface StepProps {
  onNext: () => void;
  data: string;
  setData: (_arg: string) => void;
}

export default function Step1({ onNext, data, setData }: StepProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setIsDisabled(true);
    if (data.length >= 3) {
      setIsDisabled(false);
    }
  }, [step, data, isDisabled]);

  const onClickStep = () => {
    setStep((prev) => prev + 1);
    setIsDisabled(true);
    setData("");
  };

  return (
    <>
      <Wrap>
        <RegisterHeader />

        <Stack gap={4} paddingLeft={0.5} paddingRight={0.5}>
          <Typography
            variant="h3"
            children={stepsChild[step].value}
            fontWeight={600}
          />

          {step === 2 && (
            <>
              <TextField
                size="large"
                variant="standard"
                label="휴대폰 번호"
                placeholder="010 -"
                color="primary"
                inputProps={{
                  pattern: "^[0-9-]*$",
                  maxLength: 11
                }}
                onChange={(e) => setData(e.target.value)}
              />
            </>
          )}
          {step >= 1 && (
            <>
              <TextField
                size="large"
                variant="standard"
                label="생년월일"
                placeholder="예) 19900101"
                inputProps={{
                  pattern: "^[0-9]*$",
                  maxLength: 8
                }}
                color="primary"
                onChange={(e) => setData(e.target.value)}
              />
            </>
          )}

          <TextField
            size="large"
            variant="standard"
            label="이름"
            placeholder="홍길동"
            color="primary"
            inputProps={{
              pattern: "^[가-힣a-zA-Z]*$",
              maxLength: 4
            }}
            onChange={(e) => {
              // 한글, 영어, 공백만 허용
              const value = e.target.value.replace(/[^가-힣a-zA-Z]/g, "");
              setData(value);
            }}
          />
        </Stack>
      </Wrap>
      {!isDisabled && (
        <Button
          variant="contained"
          color={"primary"}
          onClick={() => {
            if (step === 2) {
              onNext();
            } else {
              onClickStep();
            }
          }}
          children={stepsChild[step].label}
          sx={{ borderRadius: 0 }}
        />
      )}
    </>
  );
}
