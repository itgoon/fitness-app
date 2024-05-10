import CP from "@/components";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";
import { useEffect } from "react";

/**
 ****************************************
 * 로그인 화면
 ****************************************
 */

const LoginPage = () => {
  const navigate = useNavigate();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  // 주소 연락처
  // 시작일 종료일
  // 회원권 데이터 더미 만들기
  const [user, setUser] = useRecoilState(Store.Auth.userState);

  //테스트용 카카오 > 트레이너 로그인
  const onKakaoLogin = () => {
    setStore({
      name: "리온짐",
      id: "1",
      place: "경기도 부천시- ",
      phone: "01071802384"
    });
    setUser({ name: "A", id: "a1", isTrainer: true });

    navigate("/trainer/main");
  };

  //테스트용 애플 > 회원 로그인
  const onAppleLogin = () => {
    setStore({
      name: "리온짐",
      id: "1",
      place: "경기 부천시 원미구 신흥로 256 1층 ",
      phone: "0507-1359-9775"
    });
    setUser({
      name: "A회원",
      id: "b1",
      start_date: "2024.04.02",
      end_date: "2025.04.02",
      production: "30회 PT권",
      isTrainer: false
    });
    navigate("/member/main");
  };

  return (
    <>
      <CP.Styled.Wrapper
        bg={"--white-color"}
        overflow="auto"
        padding="var(--layout-padding)"
      >
        <CP.Styled.Div height="100%" padding="30% 0px 0px 0px">
          <CP.Styled.Flex
            width="100%"
            direction="column"
            items="center"
            padding="42px 0px 26px 0px"
            gap={32}
          >
            <CP.Styled.Flex
              justify="center"
              items="center"
              radius="100px"
              height="200px"
              width="200px"
              style={{
                backgroundImage: "url(/images/dummy/gym_logo.jpeg)",
                backgroundSize: "cover",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 10px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            ></CP.Styled.Flex>

            <CP.Styled.Flex
              items="center"
              style={{ paddingBottom: 26 }}
              gap={16}
            >
              <CP.Styled.Division />
              <CP.Typography variant="b2" color="--light-color" opacity="0.8">
                SNS로그인
              </CP.Typography>
              <CP.Styled.Division />
            </CP.Styled.Flex>

            <CP.Styled.Flex width="280px" direction="column" gap={8}>
              <CP.Button
                type="round"
                width="100%"
                color="--social-kakao-color"
                onClick={onKakaoLogin}
              >
                <CP.Icon
                  name="mingcute:kakao-talk-fill"
                  size={18}
                  style={{ marginRight: "12px" }}
                />
                <CP.Typography variant="b1" color="--dark-color">
                  카카오 로그인
                </CP.Typography>
              </CP.Button>

              <CP.Button
                type="round"
                width="100%"
                color="--social-apple-color"
                onClick={onAppleLogin}
              >
                <CP.Icon
                  name="ic:round-apple"
                  size={18}
                  color={"--white-color"}
                  style={{ marginRight: "12px" }}
                />
                <CP.Typography variant="b1" color="--white-color">
                  애플 로그인
                </CP.Typography>
              </CP.Button>
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </CP.Styled.Div>
      </CP.Styled.Wrapper>
    </>
  );
};

export default LoginPage;
