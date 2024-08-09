import CP from "@/components";
import Store from "@/store";
import { colorThemes } from "@/themes/theme";
import { ThemeMode } from "@/utils/constants/enums";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
/**
 ****************************************
 * 트레이너 > 설정 화면
 ****************************************
 */

const SettingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  const [color, setColor] = useRecoilState(Store.Layout.colorState);
  const [mode, setMode] = useRecoilState(Store.Layout.modeState);

  const onLogout = () => {
    setStore(undefined);
    navigate("/login");
  };
  return <>trainerSetting</>;
};

export default SettingPage;
