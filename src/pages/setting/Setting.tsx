import CP from "@/components";
import Store from "@/store";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Bridge from "@/utils/bridge";
/**
 ****************************************
 * 설정 화면
 ****************************************
 */

const SettingPage = () => {
  const navigate = useNavigate();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);

  const onLogout = () => {
    setStore(undefined);
    navigate("/login");
  };
  return (
    <CP.Styled.Wrapper>
      <CP.Button type="text" onClick={onLogout}>
        로그아웃
      </CP.Button>
    </CP.Styled.Wrapper>
  );
};

export default SettingPage;
