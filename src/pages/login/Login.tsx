import Store from "@/store";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Config from "../../../env/Config";

/**
 ****************************************
 * 로그인 화면
 ****************************************
 */

const REST_API_KEY = Config.loginKakaoApiKey;

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  // 주소 연락처
  // 시작일 종료일
  // 회원권 데이터 더미 만들기
  const [user, setUser] = useRecoilState(Store.Auth.userState);

  //테스트용 카카오 > 트레이너 로그인
  const onKakaoLoginHandler = () => {
    const REDIRECT_URI = `${window.location.origin}/oauth`;

    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;

    // setStore({
    //   name: "리온짐",
    //   id: "1",
    //   place: "경기도 부천시- ",
    //   phone: "01071802384"
    // });
    // setUser({ name: "A", id: "a1", isTrainer: true });

    // navigate("/trainer/main");
  };

  // //테스트용 애플 > 회원 로그인
  // const onAppleLogin = () => {
  //   setStore({
  //     name: "리온짐",
  //     id: "1",
  //     place: "경기 부천시 원미구 신흥로 256 1층 ",
  //     phone: "0507-1359-9775"
  //   });
  //   setUser({
  //     name: "A회원",
  //     id: "b1",
  //     start_date: "2024.04.02",
  //     end_date: "2025.04.02",
  //     production: "30회 PT권",
  //     isTrainer: false
  //   });
  //   navigate("/member/main");
  // };

  return (
    <>
      <Box overflow={"auto"} height="100%" width={"100%"} padding="16px">
        <Box height="100%" padding="30% 0px 0px 0px">
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="32px"
            alignItems="center"
            padding="42px 0px 26px 0px"
          >
            <Box
              display="flex"
              borderRadius="100px"
              height="200px"
              width="200px"
              sx={{
                backgroundImage: "url(/images/dummy/gym_logo.jpeg)",
                backgroundSize: "cover",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 10px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <Typography variant="h5">SNS로그인</Typography>

            <Button
              variant="outlined"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 10px"
              }}
              onClick={onKakaoLoginHandler}
            >
              kakao login
            </Button>
            <Button
              variant="outlined"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 10px"
              }}
            >
              apple login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
