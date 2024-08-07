import CP from "@/components";
import Store from "@/store";
import { useTheme } from "@mui/material/styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CustomBottom from "./CustomBottom";
import CustomHeader from "./CustomHeader";

const CustomLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const [color, setColor] = useRecoilState(Store.Layout.colorState);

  const [layout, setLayout] = useRecoilState(Store.Layout.layoutState);
  return (
    <CP.Styled.Layout
      // style={{ background: "linear-gradient(#e664651A, #9198e51A)" }}
      style={{
        background: theme?.palette?.bg?.main ? theme.palette.bg.main : ""
      }}
      isHeader={layout?.header ? layout.header : true}
      isBottom={layout?.bottom ? layout.bottom : true}
    >
      {layout.header && <CustomHeader />}
      <Outlet />
      {layout.bottom && <CustomBottom />}
    </CP.Styled.Layout>
  );
};

export default CustomLayout;
