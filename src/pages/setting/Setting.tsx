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
    navigate("/login");
  };
  return <>SettingPage</>;
};

export default SettingPage;
