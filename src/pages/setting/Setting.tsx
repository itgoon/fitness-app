import CP from "@/components";
import Store from "@/store";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
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
    navigate("/");
  };
  return (
    <CP.Styled.Wrapper padding="--layout-padding">
      <CP.Button type="text" onClick={onLogout}>
        로그아웃
      </CP.Button>
    </CP.Styled.Wrapper>
  );
};

export default SettingPage;
