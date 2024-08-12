/**
 ****************************************
 * 로그인 소셜 인증 화면
 ****************************************
 */

import Store from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const LoginAuthPage = () => {
  const navigate = useNavigate();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  const [user, setUser] = useRecoilState(Store.Auth.userState);
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  useEffect(() => {
    console.log({ navigate }, { code });

    setTimeout(() => {
      setStore({
        name: "리온짐",
        id: "1",
        place: "경기도 부천시- ",
        phone: "01071802384"
      });
      setUser({ name: "A", id: "a1", isTrainer: true });
      navigate("/trainer/main");
    }, 1500);

    // api  연동 후 로그인확인 , 메인으로
  }, []);

  return <div></div>;
};

export default LoginAuthPage;
