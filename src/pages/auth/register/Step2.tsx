import {
  Divider,
  Drawer,
  InputAdornment,
  Typography,
  useTheme
} from "@mui/material";
import { Stack } from "@mui/system";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "src/components/Button";
import { useBoolean } from "src/hooks/useBoolean";
import Condition from "./Conditions/Condition";
import Wrap from "./Wrap";
import RegisterHeader from "./RegisterHeader";
import TextField from "src/components/TextField";

const INITIAL_TIMER = 180;
const CODE_LENGTH = 6;

interface StepProps {
  onNext: () => void;
}

export default function Step2({ onNext }: StepProps) {
  const theme = useTheme();

  const password = useBoolean();
  const confirmPassword = useBoolean();

  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [verificationCode, setVerificationCode] = useState("");
  const [canResendCode, setCanResendCode] = useState(false);
  const [openCondition, setOpenCondition] = useState(false);

  const [isAll, setIsAll] = useState(true);
  const [isCheck1, setIsCheck1] = useState(true);
  const [isCheck2, setIsCheck2] = useState(true);
  const [isCheck3, setIsCheck3] = useState(true);

  const realCode = "123456";

  // 랜더링시 타이머
  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 6자리 이상 버튼 활성화
  useEffect(() => {
    setCanResendCode(false);
    if (verificationCode.length === 6) {
      setCanResendCode(true);
    }
  }, [verificationCode]);

  // 개별 체크박스 변경 시 전체 체크 업데이트
  useEffect(() => {
    if (isCheck1 && isCheck2 && isCheck3) {
      setIsAll(true);
    } else {
      setIsAll(false);
    }
  }, [isCheck1, isCheck2, isCheck3]);
  const checkAll = useCallback(() => {
    const newState = !isAll;
    setIsAll(newState);
    setIsCheck1(newState);
    setIsCheck2(newState);
    setIsCheck3(newState);
  }, [isAll]);

  // 인증번호 입력
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, "");
    if (numbersOnly.length <= CODE_LENGTH) {
      setVerificationCode(numbersOnly);
    }
  };

  // 인증하기
  const sendCode = () => {
    if (realCode === verificationCode && timer !== 0) {
      setOpenCondition(true);
    } else if (timer === 0) {
      alert("인증번호 입력시간이 초과되었습니다.");
    } else {
      setIsVerified(true);
    }
  };

  // 인증번호 재전송
  const resendCode = () => {
    setTimer(INITIAL_TIMER);
    setCanResendCode(false);
  };

  // 타이머의 포맷을 설정
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  {
    /* <IconButton onClick={password.onToggle} edge="end">
                <Iconify
                  icon={
                    password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                  }
                />
              </IconButton> */
  }
  return (
    <>
      <Wrap>
        <RegisterHeader />
        <Stack gap={5} paddingLeft={0.5} paddingRight={0.5}>
          <Stack gap={4}>
            <Typography
              variant={"Body24/semiBold"}
              children={"휴대폰번호로 전송된 6자리 인증번호를 입력해주세요"}
            />

            <TextField
              error={isVerified ? true : false}
              helperText={
                isVerified ? "잘못된 인증번호 입니다. 다시 입력해주세요." : ""
              }
              size="large"
              type="number"
              variant="standard"
              label="인증번호"
              placeholder="전송 받은 6자리 인증번호를 입력해주세요"
              color="primary"
              onChange={onChange}
              inputProps={{
                maxLength: 6
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography variant="Body16/regular" color={"#2962FF"}>
                      {formatTimer()}
                    </Typography>
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <Stack gap={1.5}>
            <Typography
              color={theme.palette.grey[600]}
              variant={"Body14/regular"}
              children={"혹시 인증번호를 받지 못하셨나요?"}
            />
            <Button
              variant="soft"
              onClick={resendCode}
              children={"인증번호 재전송"}
            />
          </Stack>
        </Stack>
      </Wrap>
      {canResendCode && (
        <Button
          variant="contained"
          color={"primary"}
          children={"완료"}
          size={"large"}
          onClick={sendCode}
          sx={{ borderRadius: 0 }}
        />
      )}
      <Drawer
        open={openCondition}
        onClose={() => setOpenCondition(false)}
        anchor="bottom"
      >
        <Stack gap={4}>
          <Typography children={"회원가입 약관을 확인해주세요"} />

          {/* check list */}
          <Stack gap={2}>
            <Condition
              label="약관 전체 동의"
              variant={"Body16/bold"}
              isChecked={isAll}
              onChange={checkAll}
            />

            <Divider></Divider>
            <Condition
              label="[필수] 오비서 이용약관 동의"
              isChecked={isCheck1}
              onChange={() => setIsCheck1(!isCheck1)}
              onClick={() => console.log("1")}
            />
            <Condition
              label="[필수] 오비서 개인정보 처리 동의"
              isChecked={isCheck2}
              onChange={() => setIsCheck2(!isCheck2)}
              onClick={() => console.log("2")}
            />
            <Condition
              label="[선택] 광고 및 마케팅 수신 동의"
              isChecked={isCheck3}
              onChange={() => setIsCheck3(!isCheck3)}
              onClick={() => console.log("3")}
            />
          </Stack>

          {/* btn */}
          <Stack gap={0.5}>
            <Button
              variant={"contained"}
              disabled={isCheck1 && isCheck2 ? false : true}
              color="primary"
              size={"large"}
              onClick={onNext}
              children={"약관 동의"}
            />

            <Button
              color="secondary"
              children={"닫기"}
              size={"large"}
              onClick={() => setOpenCondition(false)}
            />
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
