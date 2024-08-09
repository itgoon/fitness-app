import CP from "@/components";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

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

  return <>loginPage</>;
};

export default LoginPage;
